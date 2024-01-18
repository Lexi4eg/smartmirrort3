// pages/api/sendMode.ts
import { Kafka, Partitioners, Producer } from "kafkajs";
import { NextRequest, NextResponse } from "next/server";

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"],
});

const producer: Producer =kafka.producer({ createPartitioner: Partitioners.DefaultPartitioner })


export async function GET(
    request: NextRequest,
    { params }: { params: { temperature: string } },
) {
    const slug: string = params.temperature;
    const temperature: number = parseInt(slug);

    await producer.connect();

    await producer.send({
        topic: "temperatureData",
        messages: [{ value: JSON.stringify(temperature) }],
    });

    // Disconnect the producer
    await producer.disconnect();
    return new Response("OK", { status: 200 });
}
