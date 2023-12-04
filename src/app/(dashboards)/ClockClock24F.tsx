import React from 'react';
import ClockClock24F from "../../../components/Clocks/ClockClock24F/ClockClock24F";

interface Props {
    style?: string ;
}
export default async function ClockClock24FDashboard(props: Props) {


    return(<>
        <div className={"w-screen h-screen flex "}>
            <ClockClock24F   style={props.style} />
        </div>
    </>)
}