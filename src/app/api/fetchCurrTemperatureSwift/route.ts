import prisma from "../../../../prismaClient";

interface TemperatureData {
  value: number;
  created_at: Date;
}
export async function GET(request: Request) {
  const temperatureData: TemperatureData | null =
    await prisma.temperature.findFirst({
      select: {
        value: true,
        created_at: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

  return new Response(JSON.stringify(temperatureData), { status: 200 });
}
