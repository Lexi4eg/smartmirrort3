import prisma from "../../../../prismaClient";

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

  const humidityAndTemperatureData: HumidityAndTemperatureData | null =
    await prisma.humidityTemperature.findFirst({
      select: {
        humidity: true,
        temperature: true,
        created_at: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

  return new Response(JSON.stringify(humidityAndTemperatureData), {
    status: 200,
  });
}
