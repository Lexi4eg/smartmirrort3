import { Consumer, Kafka } from "kafkajs";

const kafka: Kafka = new Kafka({
  clientId: "my-app",
  brokers: ["broker:9092"],
});

const consumer: Consumer = kafka.consumer({ groupId: "mode" });

export default consumer;
