"use client";
import React, { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import io from "socket.io-client";
import { useRouter } from "next/navigation";

const roboto2 = Roboto({
  weight: "100",
  subsets: ["latin-ext"],
  style: "normal",
});

interface HumidityProps {
  initHumidity: number;
}

const socket = io("http://localhost:3001");

export default function Humidity_Sensor(props: HumidityProps) {
  const [humidity, setHumidity] = useState(props.initHumidity);
  const router = useRouter();


  useEffect(() => {
    socket.on("humidityData", (humidityData) => {
      setHumidity(humidityData);
      console.log(humidityData);
      router.refresh();
    });
  }, []);

  return (
    <div className=" m-2   flex w-1/2 justify-center rounded-md bg-[#212124] p-2">
      <div className={roboto2.className}>
        <div className="pt-5 text-center text-xl">Humidity</div>
        <div className="p-2 text-center text-5xl font-extralight text-[#AE445A] ">
          {humidity}%
        </div>
      </div>
    </div>
  );
}
