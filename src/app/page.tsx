import { getServerAuthSession } from "~/server/auth";
import AuthenticationPage from "../../components/authform/authpage";
import Rootdashboard from "~/app/(dashboards)/Rootdashboard";
import prisma from "../../prismaClient";

export default async function Home() {
  const session = await getServerAuthSession();

  const temperatureData = await prisma.temperature.findMany({
    take: 20,

    select: {
      value: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const humidityData = await prisma.humidity.findMany({
    take: 1,
    select: {
      value: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const temperature = temperatureData && temperatureData.length > 0 ? temperatureData[temperatureData.length - 1].value : 0;
  const humidity = humidityData && humidityData.length > 0 ? humidityData[humidityData.length - 1].value : 0;



  const now = new Date();
  let style: string = "daymode";

  if (now.getHours() >= 18 || now.getHours() <= 6) {
    style = "nightmode";
  }
  return (
    <>
      {session ? (
        <>
          <Rootdashboard session={session} style={style} temperature={temperature} humidity = {humidity} />
        </>
      ) : (
        <AuthenticationPage />
      )}
    </>
  );
}
