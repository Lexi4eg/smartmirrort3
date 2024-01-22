"use client";
import prisma from "../../prismaClient";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface TemperatureData {
  value: number;
  createdAt: Date;
}

interface TemperatureGraphProps {
  tempData: TemperatureData[];
}

export default async function Temperature_Graph({
  tempData,
}: TemperatureGraphProps) {
  // Format the date
  const formattedTempData = tempData.map((data) => ({
    ...data,
    createdAt: `${data.createdAt.getHours()} ${data.createdAt.getDate()} ${
      data.createdAt.getMonth() + 1
    } ${data.createdAt.getFullYear()}`,
  }));

  console.log(formattedTempData);
  return (
    <div className="m-2 flex h-64 flex-col rounded-md bg-[#212124]   p-2 ">
      <div className="">Temperature </div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={formattedTempData}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="createdAt" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#008170"
            fill="#008170"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
