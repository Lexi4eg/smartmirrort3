// pages/api/sendMode.ts
import { Kafka } from "kafkajs";
import type { NextApiRequest, NextApiResponse } from "next";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { mode } = req.body;

  await producer.connect();
  await producer.send({
    topic: "mode",
    messages: [{ value: mode.toString() }],
  });
  await producer.disconnect();

  return new Response("OK");
}

export { handler as GET, handler as POST };
