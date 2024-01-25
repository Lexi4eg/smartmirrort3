import { Kafka } from "kafkajs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "mode" });

const run = async (/** @type {undefined} */ options) => {
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: "temperatureData", fromBeginning: true });
  await consumer.subscribe({ topic: "humidityData", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        if (topic === "temperatureData") {
          const value = parseFloat(message.value.toString());
          const res = await prisma.temperature.create({
            data: {
              value: value,
            },
          });
          console.log(res);
        } else if (topic === "humidityData") {
          const value = parseFloat(message.value.toString());
          const res = await prisma.humidity.create({
            data: {
              value: value,
            },
          });
          console.log(res);
        }
      } catch (err) {

        console.log(err.stack);
      }
    },
  });
};

run().catch(console.error);
