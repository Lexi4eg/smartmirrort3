"use client";
import React, { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import io from "socket.io-client";

const roboto2 = Roboto({
  weight: "100",
  subsets: ["latin-ext"],
  style: "normal",
});

interface TemperatureProps {
  initTemperature: number;
}

import { useRouter } from "next/navigation";

const socket = io("http://frontend:3001");
export default function Temperature_Sensor(props: TemperatureProps) {
  const [temperature, setTemperature] = useState(props.initTemperature);
  const router = useRouter();

  useEffect(() => {
    socket.on("temperatureData", (temperatureData) => {
      setTemperature(temperatureData);
      console.log(temperatureData);
      router.refresh();
    });
  }, []);

  return (
    <div className=" m-2 flex w-1/2 justify-center rounded-md bg-[#212124] p-2 pb-10">
      <div className={roboto2.className}>
        <div className="pt-5 text-center text-xl">Temperature</div>
        <div className=" inline-block justify-center bg-gradient-to-r  from-red-700 to-blue-500 bg-clip-text p-2  text-center text-5xl font-extralight text-transparent">
          {temperature}°C
        </div>
      </div>
    </div>
  );
}
