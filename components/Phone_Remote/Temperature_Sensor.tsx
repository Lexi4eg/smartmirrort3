import React from "react";
import { Roboto } from "next/font/google";
const roboto2 = Roboto({
  weight: "100",
  subsets: ["latin-ext"],
  style: "normal",
});

interface Props {
  temperature: number;
}
export default function Temperature_Sensor({ temperature }: Props) {
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
