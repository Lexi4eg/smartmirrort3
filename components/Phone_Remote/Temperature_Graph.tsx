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

interface TemperatureData {
  value: number;
  createdAt: Date;
}

export default function Temperature_Graph() {
  const [temperatureData, setTemperatureData] = useState<TemperatureData[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:3000/api/fetchTemperature")
        .then((response) => response.json())
        .then((data: TemperatureData[]) => {
          if (Array.isArray(data)) {
            setTemperatureData(data);
          } else {
            console.error("Fetched data is not an array:", data);
          }
        });
    }, 1000);
    return () => clearInterval(interval);
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
