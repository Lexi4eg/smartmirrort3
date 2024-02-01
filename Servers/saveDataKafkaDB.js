import { Kafka } from "kafkajs";
import prisma from "../prismaClient.js";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "mode" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "temperatureData", fromBeginning: true });
  await consumer.subscribe({ topic: "humidityData", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const value = parseFloat(message.value.toString());
      console.log(value);
      try {
        const value = parseFloat(message.value.toString());
        console.log(value);
        if (isNaN(value)) {
          console.log(
            `Invalid value received for topic ${topic}: ${message.value.toString()}`,
          );
          return;
        }

        if (topic === "temperatureData") {
          const res = await prisma.temperature.create({
            data: {
              value: value,
            },
          });
          console.log(res);
        } else if (topic === "humidityData") {
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
