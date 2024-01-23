import prisma from "../../../../prismaClient";

interface HumidityData {
  value: number;
  createdAt: Date;
}

export async function GET(request: Request) {
  const humidityData: HumidityData | null = await prisma.humidity.findFirst({
    select: {
      value: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const humidity: number = humidityData ? humidityData.value : 0;

  return new Response(JSON.stringify(humidity), { status: 200 });
}
