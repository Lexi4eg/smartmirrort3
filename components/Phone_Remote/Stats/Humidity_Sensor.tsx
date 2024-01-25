"use client";
import React, {useEffect, useState} from "react";
import {Roboto} from "next/font/google";

const roboto2 = Roboto({
  weight: "100",
  subsets: ["latin-ext"],
  style: "normal",
});

interface HumidityProps {
  initHumidity: number;
}

export default function Humidity_Sensor(props: HumidityProps) {
  //implement the humidity api here and pass it to humidity
  const [humidity, setHumidity] = useState(props.initHumidity);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:3000/api/fetchHumidity")
        .then((response) => response.json())
        .then((data) => {
          setHumidity(data);
        });
    }, 1000);
    return () => clearInterval(interval);
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
