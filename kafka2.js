const { Kafka } = require("kafkajs");
const { PrismaClient } = require("@prisma/client");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "mode" });

import prisma from "./prismaClient";

s;
const run = async (/** @type {undefined} */ options) => {
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: "temperatureData", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        const res = await prisma.temperature.create({
          data: {

            message: message.value.toString(),
          },
        });
        console.log(res);
      } catch (err) {

        console.log(err.stack);
      }
    },
  });
};

run().catch(console.error);
