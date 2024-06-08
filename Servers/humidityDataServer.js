import { Kafka } from "kafkajs";
import io from "socket.io-client";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["broker:9092"],
});

const consumer = kafka.consumer({ groupId: "mode-humidity" });
const socket = io("http://localhost:3001");

const run = async () => {
  try {
    await consumer.connect();
    console.log("Connected to Kafka consumer");

    await consumer.subscribe({ topic: "humidityData", fromBeginning: true });
    console.log(`Subscribed to topic "humidityData"`);

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(`Received message from ${topic}`);

        const value = parseFloat(message.value.toString());
        console.log(`Value: ${value}`);

        try {
          if (isNaN(value)) {
            console.log(
              `Invalid value received for topic ${topic}: ${message.value.toString()}`,
            );
            return;
          }

          socket.emit(topic, value);
          console.log(`Emitted value to WebSocket server for topic "${topic}"`);
        } catch (err) {
          console.log(`Error processing message from topic "${topic}":`, err);
        }
      },
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

run().catch(console.error);
