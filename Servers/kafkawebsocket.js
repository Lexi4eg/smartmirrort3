import { Kafka } from "kafkajs";
import io from "socket.io-client";

// Initialize Kafka consumer
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "mode" });

// Initialize WebSocket client
const socket = io("http://localhost:3001"); // Replace with your server URL

const run = async () => {
  // Connect to Kafka consumer
  await consumer.connect();
  await consumer.subscribe({ topic: "temperatureData", fromBeginning: true });
  await consumer.subscribe({ topic: "humidityData", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const value = parseFloat(message.value.toString());
      console.log(value);
      if (isNaN(value)) {
        console.log(
          `Invalid value received for topic ${topic}: ${message.value.toString()}`,
        );
        return;
      }

      // Emit the data to the WebSocket server
      socket.emit(topic, value);
    },
  });
};

run().catch(console.error);
