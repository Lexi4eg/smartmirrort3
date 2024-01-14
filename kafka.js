const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const run = async () => {
  // Producing
  await producer.connect();
  await producer.send({
    topic: "test",
    messages: [{ value: "New message for test topic 2" }],
  });

  // Ensure the producer gracefully disconnects
  await producer.disconnect();
};

run().catch(console.error);
