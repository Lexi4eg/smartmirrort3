import prisma from "../../../../prismaClient";

interface HumidityData {
    value: number;
    created_at: Date;
}
export async function GET(request: Request) {
    const humidityData: HumidityData[] | null =
        await prisma.humidity.findMany({
            select: {
                value: true,
                created_at: true,
            },
            orderBy: {
                created_at: "asc",
            },
        });

    console.log(humidityData);

    return new Response(JSON.stringify(humidityData), { status: 200 });
}
