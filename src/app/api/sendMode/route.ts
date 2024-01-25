import {Kafka, Partitioners, Producer} from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer: Producer = kafka.producer({
  createPartitioner: Partitioners.DefaultPartitioner,
});
export default  async function POST(request: Request) {
  const data = await request.json();

  const mode: number = parseFloat(data.mode);

  await producer.connect();
  console.log(mode);

  await producer.send({
    topic: "mode",
    messages: [{ value: JSON.stringify(mode) }],
  });

  await producer.disconnect();
  return new Response("OK", { status: 200 });
}
