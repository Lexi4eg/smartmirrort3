import { Kafka, Partitioners, Producer } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer: Producer = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitioner,
});
export async function POST(request: Request) {
  const data = await request.json();

  const temperature: number = parseFloat(data.temperature);

  await producer.connect();

  await producer.send({
    topic: "temperatureData",
    messages: [{ value: JSON.stringify(temperature) }],
  });

  await producer.disconnect();
  return new Response("OK", { status: 200 });
}
