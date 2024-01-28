import { Kafka } from "kafkajs";
import io from "socket.io-client";

// Initialize Kafka consumer
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "mode" });

// Initialize WebSocket server
const socket = io("http://localhost:3001"); // Replace with your server URL

const run = async () => {
  // Connect to Kafka consumer
  await consumer.connect();

  const topics = ["mode", "temperatureData", "humidityData"];

  for (const topic of topics) {
    await consumer.subscribe({ topic, fromBeginning: true });
  }

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      if (message.value) {
        const value = message.value.toString();
        socket.emit(topic, value);
      }
    },
  });
};

run().catch(console.error);