import prisma from "../../../../prismaClient";

interface HumidityData {
    value: number;
    created_at: Date;
}

interface TemperatureData {
    value: number;
    created_at: Date;
}

interface HumidityAndTemperatureData {
    humidity: number;
    temperature: number;
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

    const humidityAndTemperatureData: HumidityAndTemperatureData[] = humidityData.map((humidity) => {
        const matchingTemperatureData = temperatureData.find(temperature => temperature.created_at.getTime() === humidity.created_at.getTime());
        return {
            humidity: humidity.value ? humidity.value : 0,
            temperature: matchingTemperatureData ? matchingTemperatureData.value : 0,
            created_at: humidity.created_at
        };
    });

    console.log(humidityAndTemperatureData);

    return new Response(JSON.stringify(humidityAndTemperatureData), { status: 200 });
}