import React from 'react';
import ClockClock24F from "../../../components/ClockClock24/ClockClock24";

interface Props {
    style?: string ;
}
export default async function ClockClock24FDashboard(props: Props) {


    return(<>
        <div className={"w-screen h-screen flex flex-grow"}>
            <ClockClock24F   style={props.style} />
        </div>
    </>)
}