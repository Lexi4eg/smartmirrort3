"use client";
import React from 'react';
import WordclockFUll from "../../../components/Clocks/WordClockFull/Wordclockfull";


interface Props {
    style?: string;
}
export default async function WorkClockDashboard(props: Props) {

    const now = new Date();

    return(<>
        <div className={"w-full h-full flex flex-grow"}>
            <WordclockFUll time={now.getTime()} style={props.style}/>
        </div>
    </>)
}