import prisma from "../../../../prismaClient";

interface HumidityData {
  value: number;
  createdAt: Date;
}
export async function GET(request: Request) {
  const humidityData: HumidityData[] = await prisma.humidity.findMany({
    take: 20,

    select: {
      value: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  // @ts-ignore
  const temperature: number =
    humidityData && humidityData.length > 0
      ? humidityData[humidityData.length - 1].value
      : 0;

  return new Response(JSON.stringify(temperature), { status: 200 });
}
