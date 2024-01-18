const { Kafka, Partitioners } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitioner,
});

const run = async () => {
  // Producing
  await producer.connect();

  // Send message to 'mode' topic
  await producer.send({
    topic: "mode",
    messages: [{ value: "1" }],
    producerId: "1",
  });

  // Send message to 'temperatureData' topic
  await producer.send({
    topic: "temperatureData",
    messages: [{ value: "23" }], // replace with your actual temperature data
  });

  // Ensure the producer gracefully disconnects
  await producer.disconnect();
};

run().catch(console.error);