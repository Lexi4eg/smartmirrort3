// pages/api/sendMode.ts
import { Kafka } from "kafkajs";
import type { NextApiRequest, NextApiResponse } from "next";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    new Response(JSON.stringify({ message: "Bad Request: mode is required" }), {
      status: 400,
    });
  }

  const mode = req.body.mode as number | string;

  console.log(mode + " mode");

  try {
    await producer.connect();
    const modeselected = typeof mode === "number" ? mode.toString() : "1";

    await producer.send({
      topic: "mode",
      messages: [{ value: modeselected }],
    });
    await producer.disconnect();

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export { handler as GET, handler as POST };
