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

    useEffect(() => {
        const getPowerData = async () => {
            const data:any = await fetch("/api/fetchPowerData ")
            setPowerData(data);
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