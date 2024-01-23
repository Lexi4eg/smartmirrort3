import prisma from "../../../../prismaClient";

interface TemperatureData {
  value: number;
  createdAt: Date;
}
export async function GET(request: Request) {
  const temperatureData: TemperatureData[] = await prisma.temperature.findMany({
    take: 20,
    select: {
      value: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  console.log(temperatureData);

  // @ts-ignore

  const temperature: number =
    temperatureData.length > 0
      ? temperatureData[temperatureData.length - 1].value
      : 0;

  return new Response(JSON.stringify(temperature), { status: 200 });
}
