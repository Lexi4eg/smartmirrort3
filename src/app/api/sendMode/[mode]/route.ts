// pages/api/sendMode.ts
import { Kafka, Partitioners, Producer } from "kafkajs";
import { NextRequest, NextResponse } from "next/server";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer: Producer = kafka.producer();

export async function GET(
  request: NextRequest,
  { params }: { params: { mode: string } },
) {
  const slug: string = params.mode;
  const mode: number = parseInt(slug);

  await producer.connect();

  await producer.send({
    topic: "mode",
    messages: [{ value: JSON.stringify(mode) }],
  });

  // Disconnect the producer
  await producer.disconnect();
  return new Response("OK", { status: 200 });
}
