import React from 'react';
import WordclockFUll from "../../../components/Clocks/WordClockFull/Wordclockfull";
import MillionClock from "../../../components/Clocks/MillionClock/MillionClock";
import MillionClockFull from "../../../components/Clocks/MillionClockFull/MillionClockFull";


interface Props {
    style?: string | undefined;
}
export default async function MillionTimesDashboard(props: Props) {

    const now = new Date();

    return(<>
        <div className={"w-full h-full flex flex-grow"}>
            <MillionClockFull   style={props.style}/>
        </div>
    </>)
}