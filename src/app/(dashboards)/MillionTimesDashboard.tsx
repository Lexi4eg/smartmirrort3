"use client";
import React from 'react';
import WordclockFUll from "../../../components/Clocks/WordClockFull/Wordclockfull";
import MillionClock from "../../../components/Clocks/MillionClock/MillionClock";


interface Props {
    style?: string ;
}
export default async function MillionTimesDashboard(props: Props) {

    const now = new Date();

    return(<>
        <div className={"w-full h-full flex flex-grow"}>
            <MillionClock mode={"full"}  style={props.style}/>
        </div>
    </>)
}