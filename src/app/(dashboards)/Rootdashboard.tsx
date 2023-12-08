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

const socket = io('http://192.168.178.57:3001'); // Replace with your server URL
import {useRouter} from "next/navigation";
interface Props {
    style?: string;
    session: any;
}

export default function Rootdashboard ({style, session}: Props) {
    const [selectedOption, setSelectedOption] = useState(1); // Set initial value to 1
    const router = useRouter();
    useEffect(() => {
        socket.on('mode', (newMode) => {
            setSelectedOption(newMode);
            console.log(newMode);
            router.push("/");
        });
    }, []);

    return (
        <>
            <div className="flex bg-cover max-w-screen min-h-screen bg-center  flex-col items-center justify-center text-white  bg-[#191a1b] ">
                {Number(selectedOption) === 1 && <Dashboard session={session} style={style} />}
                {Number(selectedOption) === 2 && <WorkClockDashboard style={style} />}
                {Number(selectedOption) === 3 && <MillionTimesDashboard style={style} />}
                {Number(selectedOption) === 5 && <FlipDotClock style={style} />}
                {Number(selectedOption) === 6 && <SolarSystemWallpaper style={style }/>}
                {Number(selectedOption) === 7 && <ClockClock24FDashboard style={style }/>}
                {![1, 2, 3, 5, 6, 7].includes(Number(selectedOption)) && <div>Unexpected mode: {selectedOption}</div>}
            </div>
        </>
    )
}