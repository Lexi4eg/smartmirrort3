// pages/api/modeUpdates.ts
import { Kafka } from "kafkajs";
import { NextApiRequest, NextApiResponse } from "next";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "mode" });

const HEARTBEAT_INTERVAL = 400; // 5 seconds (adjust this as needed)

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set SSE headers

  res.setHeader("Content-Type", "text/event-stream");

  res.setHeader("Cache-Control", "no-cache");

  res.setHeader("Connection", "keep-alive");

  const intervalId = setInterval(() => {
    // Send a heartbeat message to keep the connection alive

    res.write(": heartbeat\n\n");
  }, HEARTBEAT_INTERVAL);

  // ... Rest of the SSE implementation

  // Handle client disconnect

  req.socket.on("close", () => {
    // Clean up resources and stop sending updates when the client disconnects

    clearInterval(intervalId);

    res.end();
  });
}
