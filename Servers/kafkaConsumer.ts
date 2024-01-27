import {Consumer, Kafka} from "kafkajs";

const kafka: Kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer: Consumer = kafka.consumer({ groupId: "mode" });

export default consumer;
