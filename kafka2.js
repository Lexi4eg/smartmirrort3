const { Kafka } = require("kafkajs");
const { PrismaClient } = require("@prisma/client");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "mode" });

import prisma from "./prismaClient";
const run = async (/** @type {undefined} */ options) => {
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: "temperatureData", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      // Instead of logging the message value, insert it into your PostgreSQL database
      try {
        const res = await prisma.temperature.create({
          data: {
            // @ts-ignore
            message: message.value.toString(),
          },
        });
        console.log(res);
      } catch (err) {
        // @ts-ignore
        console.log(err.stack);
      }
    },
  });
};

run().catch(console.error);
