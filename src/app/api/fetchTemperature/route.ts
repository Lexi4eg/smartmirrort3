import prisma from "../../../../prismaClient";

interface TemperatureData {
    value: number;
    created_at: Date;
}

export async function GET(request: Request) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const temperatureData: TemperatureData[] | null =
        await prisma.temperature.findMany({
            select: {
                value: true,
                created_at: true,
            },
            where: {
                created_at: {
                    gte: today,
                    lt: tomorrow
                }
            },
            orderBy: {
                created_at: "asc",
            },
        });

    console.log(temperatureData);

    return new Response(JSON.stringify(temperatureData), { status: 200 });
}