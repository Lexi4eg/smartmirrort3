import { Kafka, Partitioners, Producer } from "kafkajs";
import { NextResponse } from "next/server";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["broker:9092"],
  connectionTimeout: 30000,
});

const producer: Producer = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitioner,
});
export async function POST(request: Request) {
  const data = await request.json();

  const mode: number = parseFloat(data.mode);

  await producer.connect();
  console.log(mode);

  await producer.send({
    topic: "mode",
    messages: [{ value: JSON.stringify(mode) }],
  });

  await producer.disconnect();
  return NextResponse.json({ mode: mode }, { status: 200 });
}
