import prisma from "../../../../prismaClient";

interface TemperatureData {
  value: number;
    created_at: Date;
}
export async function GET(request: Request) {
  const temperatureData: TemperatureData[] | null =
    await prisma.temperature.findMany({
      select: {
        value: true,
          created_at: true,
      },
      orderBy: {
          created_at: "asc",
      },
    });

  console.log(temperatureData);

  return new Response(JSON.stringify(temperatureData), { status: 200 });
}
