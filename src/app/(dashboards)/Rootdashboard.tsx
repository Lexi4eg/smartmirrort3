"use client";

import Dashboard from "~/app/(dashboards)/Dashboard";
import WorkClockDashboard from "~/app/(dashboards)/WorkClockDashboard";
import MillionTimesDashboard from "~/app/(dashboards)/MillionTimesDashboard";
import FlipDotClock from "~/app/(dashboards)/FlipDotClock/FlipDotClock";
import SolarSystemWallpaper from "~/app/(dashboards)/solarSystem/solarSystemWallpaper";
import { Kafka } from "kafkajs";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import MillionTimesDashboardBlackWhite from "~/app/(dashboards)/MillionTimesDashboardBlackWhite";
import MillionTimesDashboardGlass from "~/app/(dashboards)/MillionTimesDashboardGlass";
import MillionTimesDashboardWood from "~/app/(dashboards)/MillionTimesDashboardWood";
import DoublePendulum from "~/app/(dashboards)/DoublePendulum";
interface Props {
  style?: string;
  session: any;
}

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "mode" });

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: "mode", fromBeginning: false });
}

export default function Rootdashboard({ style, session }: Props) {
  const [selectedOption, setSelectedOption] = useState(2); // Set initial value to 1
  const router = useRouter();

  useEffect(() => {
    const eventSource = new EventSource("/api/modeUpdates");

    eventSource.onmessage = (event) => {
      const newMode = parseInt(event.data, 10);
      setSelectedOption(newMode);
      console.log(newMode);
      router.push("/");
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <>
      <div className="max-w-screen flex min-h-screen flex-col items-center  justify-center bg-[#191a1b] bg-cover bg-center  text-white ">
        {Number(selectedOption) === 1 && (
          <Dashboard session={session} style={style} />
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
