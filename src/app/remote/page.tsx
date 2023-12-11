import React from "react";
import io from "socket.io-client";
import { Roboto } from "next/font/google";
import Mode_Selector from "../../../components/Phone_Remote/Mode_Selector";
import Temperature_Sensor from "../../../components/Phone_Remote/Temperature_Sensor";
import Humidity_Sensor from "../../../components/Phone_Remote/Humidity_Sensor";
import Power_Graph from "../../../components/Phone_Remote/Power_Graph";
import { getServerAuthSession } from "~/server/auth";
import AuthenticationPage from "../../../components/authform/authpage";
import Remote_Navbar from "../../../components/Phone_Remote/Remote_Navbar";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin-ext"],
  style: "normal",
});

interface PowerData {
  time: number;
  power: number;
}

const data: PowerData[] = [
  {
    time: 0,
    power: 33,
  },
  {
    time: 1,
    power: 40,
  },
  {
    time: 2,
    power: 45,
  },
  {
    time: 3,
    power: 50,
  },
  {
    time: 4,
    power: 55,
  },
  {
    time: 5,
    power: 60,
  },
];

export default async function Page() {
  const temperature = 25;
  const humidity = 50;

  //const session = await getServerAuthSession();
  const session = true;
  return (
    <>
      {session ? (
        <div className={roboto.className}>
          <div className="flex  h-full min-h-screen  w-screen flex-col   overflow-hidden overflow-y-hidden bg-[#161618] p-5 text-[#E4E1DC]   sm:hidden">
            <div className="flex flex-row items-center justify-between">
              <div className="pb-3 pt-2 text-2xl  ">Hello, Felix Prattes</div>
              <Remote_Navbar />
            </div>
            <div className="">Smart Mirror Alpha 1.1</div>
            <div className="rounded-md bg-[#1B1D1D] ">
              <div className="">
                <Mode_Selector />
              </div>
              <div className="flex h-full w-full flex-col  ">
                <div className="flex w-full flex-row   ">
                  <Temperature_Sensor temperature={temperature} />
                  <Humidity_Sensor humidity={humidity} />
                </div>
                <Power_Graph data={data} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <AuthenticationPage />
      )}
    </>
  );
}
