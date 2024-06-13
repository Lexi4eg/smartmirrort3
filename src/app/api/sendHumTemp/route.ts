import prisma from "../../../../prismaClient";
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

  const temperature: number = parseFloat(data.temperature);
  const humidity: number = parseFloat(data.humidity);

  await prisma.humidityTemperature.create({
    data: {
      temperature,
      humidity,
    },
  });

  try {
    await producer.connect();
    console.log("Sending temperature and Humidity data to Kafka");
    await producer.send({
      topic: "temperatureData",
      messages: [{ value: JSON.stringify(temperature) }],
    });

    await producer.send({
      topic: "humidityData",
      messages: [{ value: JSON.stringify(humidity) }],
    });
  } catch (error) {
    console.error("Error sending data to Kafka", error);
  }

  await producer.disconnect();
  return new Response("OK", { status: 200 });
}
