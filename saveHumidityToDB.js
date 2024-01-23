import consumer from "./kafkaConsumer.js";
import prisma from "./prismaClient.js";

const run = async () => {
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: "temperatureData", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      // Parse the message value, assuming it's a JSON string
      const data = JSON.parse(message.value.toString());

      // Insert it into your PostgreSQL database
      try {
        const res = await prisma.temperature.create({
          data: {
            temperature: message.value.toString(),
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
