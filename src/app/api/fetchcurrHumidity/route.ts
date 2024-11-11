import prisma from "../../../../prismaClient";

interface HumidityData {
  value: number;
  created_at: Date;
}
export async function GET(request: Request) {
  const humidity: HumidityData | null = await prisma.humidity.findFirst({
    select: {
      value: true,
      created_at: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  const temperature: number = humidity ? humidity.value : 0;

  return new Response(JSON.stringify(temperature), { status: 200 });
}
