const { Kafka } = require("kafkajs");
const { Client } = require('pg');

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "mode" });

const client = new Client({
  user: 'postgres', // updated user
  host: 'localhost', // updated host
  database: 'smartmirror', // updated database
  password: 'postgres', // updated password
  port: 5432, // updated port
});

const run = async options => {
  await client.connect();

  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS temperatureDataLog (
      id SERIAL PRIMARY KEY,
      message TEXT NOT NULL
    )
  `;
  await client.query(createTableQuery);

  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: "temperatureData", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      // Instead of logging the message value, insert it into your PostgreSQL database
      const text = 'INSERT INTO temperatureDataLog(message) VALUES($1) RETURNING *';
      const values = [message.value.toString()];

      try {
        const res = await client.query(text, values);
        console.log(res.rows[0]);
      } catch (err) {
        console.log(err.stack);
      }
    },
  });
};

run().catch(console.error);