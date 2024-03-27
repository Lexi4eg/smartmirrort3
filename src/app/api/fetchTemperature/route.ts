import prisma from "../../../../prismaClient";

interface TemperatureData {
  value: number;
  createdAt: Date;
}
export async function GET(request: Request) {
  const temperatureData: TemperatureData[] | null =
    await prisma.temperature.findMany({
      select: {
        value: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

  console.log(temperatureData);

  return new Response(JSON.stringify(temperatureData), { status: 200 });
}
