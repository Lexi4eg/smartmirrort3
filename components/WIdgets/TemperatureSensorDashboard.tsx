"use client";
import React, { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import { useRouter } from "next/navigation";
import io from "socket.io-client";

const roboto2 = Roboto({
  weight: "100",
  subsets: ["latin-ext"],
  style: "normal",
});

interface Props {
  temperature: number;
  style?: string;
}

const socket = io("http://frontend:3001");

export default function Temperature_Sensor_Dashboard({
  temperature,
  style,
}: Props) {
  const [temperatureLive, setTemperature] = useState(temperature);
  const router = useRouter();

  useEffect(() => {
    socket.on("temperatureData", (temperatureData) => {
      setTemperature(temperatureData);
      console.log(temperatureData);
      router.refresh();
    });
  }, []);

  return (
    <div
      className={` m-2 flex h-full w-full items-center justify-center rounded-md  p-2 pb-10 ${
        style === "nightmode" ? "text-nightmode" : "text-white"
      }`}
    >
      <div className={roboto2.className}>
        <div className="pt-5 text-center text-3xl">Temperature</div>
        <div
          className={`inline-block justify-center  bg-clip-text p-2  text-center text-9xl font-extralight  ${
            style === "nightmode"
              ? "text-nightmode"
              : "bg-gradient-to-r  from-red-700 to-blue-500 text-transparent "
          }`}
        >
          {temperatureLive}°C
        </div>
      </div>
    </div>
  );
}
