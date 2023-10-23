
import React from 'react';
import WelcomeWidget from "~/app/_components/WelcomeWidget";
import ClockWidget from "~/app/_components/ClockWidget";
import IPWidget from "~/app/_components/IPWidget";
import Weather from "~/app/_components/Weather";
import WeatherWidget from "~/app/_components/Weather";
import Link from "next/link";
import Clock2 from "~/app/_components/Clock2";

export default  function Dashboard () {
    return (
        <div>
            <div className='grid grid-cols-10 grid-rows-6 gap-4 h-screen w-screen'>
                <div className='col-span-4 row-span-3 rounded-xl  ' style={{ backdropFilter: "blur(10px)" }}>
                    <WeatherWidget/>
                </div>
                <div className='col-span-2 row-span-2 rounded-xl  ' style={{ backdropFilter: "blur(10px)" }}>
                    <WelcomeWidget/>
                </div>
                <div className='col-span-2 row-span-2 rounded-xl  flex items-center justify-center  ' style={{ backdropFilter: "blur(10px)" }}>
                    <ClockWidget/>
                </div>
                <div className='col-span-2 row-span-3  rounded-xl ' style={{ backdropFilter: "blur(10px)" }}>
                    <IPWidget/>
                </div>
                <div className='col-span-2 row-span-1 rounded-xl ' style={{ backdropFilter: "blur(10px)" }}>

                        <Link
                            href="/api/auth/signout"
                            className="rounded-full bg-white/10 px-10 py-3  font-semibold no-underline transition hover:bg-white/20"
                        >
                            Sign in
                        </Link>

                </div>

                <div className='col-span-2 row-span-2 ' style={{ backdropFilter: "blur(10px)" }}>
                    <Clock2 time={4} />
                </div>
            </div>
        </div>
    );
}
