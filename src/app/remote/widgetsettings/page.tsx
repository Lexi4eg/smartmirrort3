import React from "react";
import Remote_Navbar from "../../../../components/Phone_Remote/Remote_Navbar";
import { getServerAuthSession } from "~/server/auth";
import Mode_Selector from "../../../../components/Phone_Remote/Mode_Selector";
import Temperature_Sensor from "../../../../components/Phone_Remote/Temperature_Sensor";
import Humidity_Sensor from "../../../../components/Phone_Remote/Humidity_Sensor";
import Power_Graph from "../../../../components/Phone_Remote/Power_Graph";
import WidgetRemote from "../../../../components/Phone_Remote/WidgetRemote";

export default async function Page() {
  const session = await getServerAuthSession();
  const username = session?.user.name ?? "Felix Prattes f";
  return (
    <>
      <div className="flex  h-full min-h-screen  w-screen flex-col   overflow-hidden overflow-y-hidden bg-[#161618] p-5 text-[#E4E1DC]   sm:hidden">
        <div className="flex flex-row items-center justify-between">
          <div className="py-3 text-2xl  ">Hello, {username}</div>
          <Remote_Navbar />
        </div>
        <div className="flex h-full w-full flex-col rounded-md bg-[#1B1D1D] ">
          <WidgetRemote />
        </div>
      </div>
    </>
  );
}
