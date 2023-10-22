
import React from 'react';
import WelcomeWidget from "~/app/_components/WelcomeWidget";
import ClockWidget from "~/app/_components/ClockWidget";
import IPWidget from "~/app/_components/IPWidget";
import Weather from "~/app/_components/Weather";
import WeatherWidget from "~/app/_components/Weather";

export default  function Dashboard () {
    return (
        <div>
            <div className='grid grid-cols-10 grid-rows-6 gap-4 h-screen w-screen'>
                <div className='col-span-4 row-span-3 bg-black'>

                    <WeatherWidget/>
                </div>
                <div className='col-span-2 row-span-2 bg-black'>
                    <WelcomeWidget/>
                </div>
                <div className='col-span-2 row-span-2 bg-black'>
                    <ClockWidget/>
                </div>
                <div className='col-span-2 row-span-3 bg-black'>
                    <IPWidget/>
                </div>
            </div>
        </div>
    );
}
