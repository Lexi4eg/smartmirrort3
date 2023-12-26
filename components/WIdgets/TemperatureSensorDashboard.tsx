import React from "react";
import { Roboto } from "next/font/google";
const roboto2 = Roboto({
  weight: "100",
  subsets: ["latin-ext"],
  style: "normal",
});

interface Props {
  temperature: number;
  style?: string;
}
export default function Temperature_Sensor_Dashboard({
  temperature,
  style,
}: Props) {
  return (
    <div
      className={` m-2 flex h-full w-full items-center justify-center rounded-md bg-[#212124] p-2 pb-10 ${
        style === "nightmode" ? "text-nightmode" : "text-white"
      }`}
    >
      <div className={roboto2.className}>
        <div className="pt-5 text-center text-3xl">Temperature</div>
        <div
          className={`inline-block justify-center  bg-clip-text p-2  text-center text-8xl font-extralight  ${
            style === "nightmode"
              ? "text-nightmode"
              : "bg-gradient-to-r  from-red-700 to-blue-500 text-transparent "
          }`}
        >
          {temperature}°C
        </div>
      </div>
    </div>
  );
}
