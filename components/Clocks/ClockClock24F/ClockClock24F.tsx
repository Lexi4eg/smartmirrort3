import React from 'react';
import SingleClockF from "./SingleClockF";

interface Props {
    style?: string ;

}

export default function ClockClock24F(props:Props) {
    return (
        <>
            <SingleClockF hour={2} minute={2} style={props.style}/>
        </>
    )

}