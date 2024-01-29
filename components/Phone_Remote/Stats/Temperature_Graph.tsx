"use client";
import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import io from "socket.io-client";
import { useRouter } from "next/navigation";

interface TemperatureData {
  value: number;
  createdAt: Date;
}

interface TemperatureGraphProps {
  temperatureData: TemperatureData[];
}

const socket = io("http://localhost:3001");

export default function Temperature_Graph(props: TemperatureGraphProps) {
  const [temperatureData, setTemperatureData] = useState<TemperatureData[]>(
    props.temperatureData,
  );

  const router = useRouter();

  useEffect(() => {
    socket.on("temperatureData", (newTemperatureData) => {
      setTemperatureData(newTemperatureData);
      console.log(newTemperatureData);
      router.refresh();
    });
  }, []);

  const formattedTempData = temperatureData.map((data) => {
    const createdAt = new Date(data.createdAt);
    return {
      ...data,
      createdAt: `${createdAt.getHours()} ${createdAt.getDate()} ${
        createdAt.getMonth() + 1
      } ${createdAt.getFullYear()}`,
    };
  });

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
