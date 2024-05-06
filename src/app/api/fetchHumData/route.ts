import prisma from "../../../../prismaClient";

interface HumidityData {
    value: number;
    created_at: Date;
}

export async function GET(request: Request) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const humidityData: HumidityData[] | null =
        await prisma.humidity.findMany({
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

    console.log(humidityData);

    return new Response(JSON.stringify(humidityData), { status: 200 });
}