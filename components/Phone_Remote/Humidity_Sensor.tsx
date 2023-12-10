import React from "react";
import { Roboto } from "next/font/google";

interface Props {
  humidity: number;
}
const roboto2 = Roboto({
  weight: "100",
  subsets: ["latin-ext"],
  style: "normal",
});

export default function Humidity_Sensor({ humidity }: Props) {
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
