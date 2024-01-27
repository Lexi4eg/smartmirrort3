import {Kafka} from "kafkajs";
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
  await consumer.subscribe({ topic: "mode", fromBeginning: true });
  await consumer.subscribe({ topic: "temperature", fromBeginning: true });
  await consumer.subscribe({ topic: "humidity", fromBeginning: true });


  // Run Kafka consumer
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      // Check if message.value is not null before calling toString()
      if (message.value) {
        const value = message.value.toString();
        // Emit the message to the WebSocket
        socket.emit(topic, value);
      }
    },
  });
};

run().catch(console.error);