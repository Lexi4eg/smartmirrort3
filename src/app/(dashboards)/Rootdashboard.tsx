"use client"


import Dashboard from "~/app/(dashboards)/Dashboard";
import WorkClockDashboard from "~/app/(dashboards)/WorkClockDashboard";
import MillionTimesDashboard from "~/app/(dashboards)/MillionTimesDashboard";
import Dashboard3 from "~/app/(dashboards)/Dashboard3";
import FlipDotClock from "~/app/(dashboards)/FlipDotClock/FlipDotClock";
import SolarSystemWallpaper from "~/app/(dashboards)/solarSystem/solarSystemWallpaper";
import ClockClock24FDashboard from "~/app/(dashboards)/ClockClock24F";


import io from 'socket.io-client';
import {useEffect, useState} from "react";

const socket = io('http://localhost:3001'); // Replace with your server URL


interface Props {
    style?: string;
    session: any;
}
export default function Rootdashboard ({style, session}: Props) {

    const [selectedOption, setSelectedOption] = useState(1);


    useEffect(() => {
        // Listen for incoming messages
        socket.on('mode', (message) => {
            setSelectedOption(message);
        });
    }, []);

    return (
        <>
            <div className="flex bg-cover max-w-screen min-h-screen bg-center  flex-col items-center justify-center text-white  bg-[#191a1b] ">
                {selectedOption === 1 && <Dashboard session={session} style={style} />}
                {selectedOption === 2 && <WorkClockDashboard style={style} />}
                {selectedOption === 3 && <MillionTimesDashboard style={style} />}
                {selectedOption === 5 && <FlipDotClock style={style} />}
                {selectedOption === 6 && <SolarSystemWallpaper style={style }/>}
                {selectedOption === 7 && <ClockClock24FDashboard style={style }/>}
            </div>
        </>
    )
}