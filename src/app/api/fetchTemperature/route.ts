import prisma from "../../../../prismaClient";



export async function GET(request: Request) {
    const humidityData = await prisma.humidity.findMany({
        take: 1,
        select: {
            value: true,
            createdAt: true,
        },
        orderBy: {
            createdAt: "asc",
        },
    });


    const humidity = humidityData && humidityData.length > 0 ? humidityData[humidityData.length - 1].value : 0;
    return new Response(JSON.stringify(humidity), {status: 200});
}