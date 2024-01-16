const { Kafka, Partitioners } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitione,
});

const run = async () => {
  // Producing
  await producer.connect();
  await producer.send({
    topic: "mode",
    messages: [{ value: "1" }],
    producerId: "1",
  });

  // Ensure the producer gracefully disconnects
  await producer.disconnect();
};

run().catch(console.error);
