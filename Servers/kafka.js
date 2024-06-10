import { Kafka, Partitioners } from "kafkajs";
const kafka = new Kafka({
  clientId: "my-app",
  brokers: [process.env.KAFKA_BROKER],
});

const producer = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitioner,
});

const run = async () => {
  await producer.connect();

  await producer.send({
    topic: "mode",
    messages: [{ value: "1" }],
    producerId: "1",
  });

  await producer.send({
    topic: "temperatureData",
    messages: [{ value: "23" }],
  });

  await producer.send({
    topic: "humidityData",
    messages: [{ value: "23" }],
  });

  await producer.disconnect();
};

run().catch(console.error);
