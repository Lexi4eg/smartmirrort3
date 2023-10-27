
import React from 'react';
import WelcomeWidget from "~/app/_components/WelcomeWidget";
import ClockWidget from "~/app/_components/Clocks/ClockWidget";
import IPWidget from "~/app/_components/IPWidget";
import Weather from "~/app/_components/Weather";
import WeatherWidget from "~/app/_components/Weather";
import Link from "next/link";
import Clock2 from "~/app/_components/Clocks/Clock2";
import NasaWidget from "~/app/_components/NasaWidget";
import DailyQuoteWidget from "~/app/_components/DailyQuoteWidget";
import Wordclock from "~/app/_components/Clocks/Wordclock";
// @ts-ignore
import Clocks from "~/app/_components/MillionClock/Clocks";

export default  function Dashboard2 () {
    return (
        <div>
            <div className='grid grid-cols-10 grid-rows-6 gap-4 h-screen w-screen'>


                <div className='col-span-10 row-span-6 ' style={{ backdropFilter: "blur(10px)" }}>
                    <Clocks   />
                </div>

            </div>
        </div>
    );
}
