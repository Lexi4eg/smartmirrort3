"use client";
import Dashboard from "~/app/(dashboards)/Dashboard";
import WorkClockDashboard from "~/app/(dashboards)/WorkClockDashboard";
import MillionTimesDashboard from "~/app/(dashboards)/MillionTimesDashboard";
import FlipDotClock from "~/app/(dashboards)/FlipDotClock/FlipDotClock";
import SolarSystemWallpaper from "~/app/(dashboards)/solarSystem/solarSystemWallpaper";

import io from "socket.io-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MillionTimesDashboardBlackWhite from "~/app/(dashboards)/MillionTimesDashboardBlackWhite";
import MillionTimesDashboardGlass from "~/app/(dashboards)/MillionTimesDashboardGlass";
import MillionTimesDashboardWood from "~/app/(dashboards)/MillionTimesDashboardWood";
import DoublePendulum from "~/app/(dashboards)/DoublePendulum";
import Dashboard4 from "~/app/(dashboards)/Dashboard4";

const socket = io("http://localhost:3001"); // Replace with your server URL
interface Props {
  style?: string;
  session: any;
  humidity: number;
  temperature: number;
}

export default function Rootdashboard({
  style,
  session,
  temperature,
  humidity,
}: Props) {
  const [selectedOption, setSelectedOption] = useState(1); // Set initial value to 1
  const router = useRouter();

  useEffect(() => {
    socket.on("mode", (newMode) => {
      setSelectedOption(newMode);
      console.log(newMode);
      router.push("/");
    });
  }, []);

  return (
    <>
      <div className="max-w-screen flex min-h-screen flex-col items-center  justify-center bg-black bg-cover bg-center  text-white ">
        {Number(selectedOption) === 1 && (
          <Dashboard4
            session={session}
            style={style}
            humidity={humidity}
            temperature={temperature}
          />
        )}
        {Number(selectedOption) === 2 && <WorkClockDashboard style={style} />}
        {Number(selectedOption) === 3 && (
          <MillionTimesDashboard style={style} />
        )}
        {Number(selectedOption) === 4 && <MillionTimesDashboardBlackWhite />}
        {Number(selectedOption) === 5 && (
          <MillionTimesDashboardWood style={style} />
        )}
        {Number(selectedOption) === 6 && (
          <MillionTimesDashboardGlass style={style} />
        )}

        {Number(selectedOption) === 7 && <SolarSystemWallpaper style={style} />}
        {Number(selectedOption) === 8 && <FlipDotClock style={style} />}
        {Number(selectedOption) === 9 && <DoublePendulum />}
        {![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(selectedOption)) && (
          <div>Unexpected mode: {selectedOption}</div>
        )}
      </div>
    </>
  );
}
