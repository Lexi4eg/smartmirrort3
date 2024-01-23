import prisma from "../../../../prismaClient";



export async function GET(request: Request) {
    const temperatureData = await prisma.humidity.findMany({
        take: 1,

        select: {
            value: true,
            createdAt: true,
        },
        orderBy: {
            createdAt: "asc",
        },
    });


    const temperature = temperatureData && temperatureData.length > 0 ? temperatureData[temperatureData.length - 1].value : 0;
    return new Response(JSON.stringify(temperature), {status: 200});
}