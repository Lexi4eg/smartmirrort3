import prisma from "../../../../prismaClient";

interface TemperatureData {
  value: number;
  createdAt: Date;
}
export async function GET(request: Request) {
  const temperatureData: TemperatureData | null =
    await prisma.temperature.findFirst({
      select: {
        value: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

  console.log(temperatureData);

  const temperature: number = temperatureData ? temperatureData.value : 0;

  return new Response(JSON.stringify(temperature), { status: 200 });
}
