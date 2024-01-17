import { Kafka } from "kafkajs";
import { NextRequest, NextResponse } from "next/server";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "mode" });

export async function GET(req: NextRequest) {
  const res = new NextResponse();
  try {
    // Set SSE headers
    res.headers.set("Content-Type", "text/event-stream");
    res.headers.set("Cache-Control", "no-cache");
    res.headers.set("Connection", "keep-alive");

    await consumer.connect();
    await consumer.subscribe({ topic: "mode", fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        // Write the message value to the response stream
        res.send(`data: ${message.value.toString()}\n\n`);
      },
    });

    // Handle client disconnect
    // req.socket is not available in Next.js 14, so we can't handle client disconnect here
  } catch (error) {
    console.error(error);
    return new Response("Error 500", { status: 500 });
  }

  return res;
}
