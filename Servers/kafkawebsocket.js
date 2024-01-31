import { Kafka } from "kafkajs";
import io from "socket.io-client";

// Initialize Kafka consumer
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "mode" });

const socket = io("http://localhost:3001");

const run = async () => {
  try {
    // Connect to Kafka consumer
    await consumer.connect();
    console.log("Connected to Kafka consumer");

    const topics = ["temperatureData", "humidityData"];

    for (const topic of topics) {
      await consumer.subscribe({ topic, fromBeginning: true });
      console.log(`Subscribed to topic "${topic}"`);
    }

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

          // Emit the data to the WebSocket server
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

run().catch(console.error);
