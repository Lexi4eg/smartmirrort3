import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

interface WidgetPosition {
  id: string;
  widget: string;
  colSpan: number;
  rowSpan: number;
}

export default async function sendWidget(widget: WidgetPosition[]) {
  console.log(widget);

  await producer.connect();
  await producer.send({
    topic: "mode",
    messages: [{ value: JSON.stringify(widget) }],
  });
  await producer.disconnect();
}
