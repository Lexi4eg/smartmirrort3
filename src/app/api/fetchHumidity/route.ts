import prisma from "../../../../prismaClient";

interface HumidityData {
  value: number;
  created_at: Date;
}

export async function GET(request: Request) {
  const humidityData: HumidityData | null = await prisma.humidity.findFirst({
    select: {
      value: true,
      created_at: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  const humidity: number = humidityData ? humidityData.value : 0;

  return new Response(JSON.stringify(humidity), { status: 200 });
}
