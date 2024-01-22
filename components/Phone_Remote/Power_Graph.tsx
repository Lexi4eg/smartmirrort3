"use client"
import React, { useEffect, useState } from "react";
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";



export default function Power_Graph() {
    const [powerData, setPowerData] = useState([]);
    let processedData = [];

    useEffect(() => {
        const getPowerData = async () => {
            const response = await fetch("/api/fetchPowerData");

            if (!response.ok) {
                console.error(`HTTP error! status: ${response.status}`);
                return;
            }

            const data = await response.text();

            if (!data) {
                console.log('No data returned from API');
                return;
            }

            const jsonData = JSON.parse(data);
            const processedData = jsonData.map((item: any, index: number) => ({
                time: index,
                power: item.message,
            }));

            setPowerData(processedData);
        };

        getPowerData();
    }, []);

    return (
        <div className="m-2 flex h-64 flex-col rounded-md bg-[#212124]   p-2 ">
            <div className="">Power Consumption</div>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={powerData}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="power"
                        stroke="#008170"
                        fill="#008170"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}