import { Kafka, Partitioners, Producer } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["broker:9092"],
});

const producer: Producer = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitioner,
});
export async function POST(request: Request) {
  const data = await request.json();

  const humidity: number = parseFloat(data.humidity);

  await producer.connect();

  await producer.send({
    topic: "humidityData",
    messages: [{ value: JSON.stringify(humidity) }],
  });

  // Disconnect the producer
  await producer.disconnect();
  return new Response("OK", { status: 200 });
}
