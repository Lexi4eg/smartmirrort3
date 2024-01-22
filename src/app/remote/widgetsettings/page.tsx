import React from "react";
import Remote_Navbar from "../../../../components/Phone_Remote/Remote_Navbar";
import { getServerAuthSession } from "~/server/auth";
import Mode_Selector from "../../../../components/Phone_Remote/Mode_Selector";
import Temperature_Sensor from "../../../../components/Phone_Remote/Temperature_Sensor";
import Humidity_Sensor from "../../../../components/Phone_Remote/Humidity_Sensor";
import Power_Graph from "../../../../components/Phone_Remote/Temperature_Graph";

export default async function Page() {
  const session = await getServerAuthSession();
  const username = session?.user.name ?? "Felix Prattes f";
  return (
    <>
      <div className="flex  h-full min-h-screen  w-screen flex-col   overflow-hidden overflow-y-hidden bg-[#161618] p-5 text-[#E4E1DC]   ">
        <div className="flex flex-row items-center justify-between">
          <div className="py-3 text-2xl  ">Hello, {username}</div>
          <Remote_Navbar />
        </div>
      </div>
    </>
  );
}
