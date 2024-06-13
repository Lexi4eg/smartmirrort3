"use client";
import React, { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import io from "socket.io-client";
import { useRouter } from "next/navigation";

interface Props {
  humidity: number;
  style?: string;
}
const roboto2 = Roboto({
  weight: "100",
  subsets: ["latin-ext"],
  style: "normal",
});
const socket = io("http://localhost:3001");

export default function Humidity_Sensor_Dashboard({ humidity, style }: Props) {
  const [humidityLive, setHumidity] = useState(humidity);
  const router = useRouter();

  useEffect(() => {
    socket.on("humidityData", (humidityData) => {
      setHumidity(humidityData);
      console.log(humidityData);
      router.refresh();
    });
  }, []);

  return (
    <div
      className={` m-2   flex h-full w-full items-center justify-center rounded-md  p-2 pb-10  ${
        style === "nightmode" ? "text-nightmode" : "text-white"
      }`}
    >
      <div className={roboto2.className}>
        <div className="pt-5 text-center text-3xl">Humidity</div>
        <div
          className={` p-2 text-center text-9xl font-extralight  ${
            style === "nightmode" ? "text-nightmode" : "text-[#AE445A]"
          }`}
        >
          {humidityLive}%
        </div>
      </div>
    </div>
  );
}
