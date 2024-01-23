import React from "react";
import io from "socket.io-client";
import { Roboto } from "next/font/google";
import Mode_Selector from "../../../components/Phone_Remote/Mode_Selector";
import Temperature_Sensor from "../../../components/Phone_Remote/Temperature_Sensor";
import Humidity_Sensor from "../../../components/Phone_Remote/Humidity_Sensor";
import Power_Graph from "../../../components/Phone_Remote/Temperature_Graph";
import { getServerAuthSession } from "~/server/auth";
import AuthenticationPage from "../../../components/authform/authpage";
import Remote_Navbar from "../../../components/Phone_Remote/Remote_Navbar";
import prisma from "../../../prismaClient";
import { template } from "@babel/core";
import Temperature_Graph from "../../../components/Phone_Remote/Temperature_Graph";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin-ext"],
  style: "normal",
});

interface TemperatureData {
  value: number;
  createdAt: Date;
}

export default async function Page() {

  const session = await getServerAuthSession();
  const username = session?.user.name ?? "Felix Prattes";

  const temperatureResponse = await fetch("api/fetchTemperature");
  const temperature: number = await temperatureResponse.json();

  const humidityResponse = await fetch("api/fetchHumidity");
  const humidity: number = await humidityResponse.json();


  return (
    <>
      {session ? (
        <div className={roboto.className}>
          <div className="flex  h-full min-h-screen  w-screen flex-col   overflow-hidden overflow-y-hidden bg-[#161618] p-5 text-[#E4E1DC]   sm:hidden">
            <div className="flex flex-row items-center justify-between">
              <div className="py-3 text-2xl  ">Hello, {username}</div>
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
                <Temperature_Graph tempData={temperatureData} />
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
