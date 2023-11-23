import React from "react";
import Wordclock from "../../../components/Clocks/Wordclock/Wordclock";

interface Props {
    style?: string;
}
const WordClockDashboard = (props: Props) => {
    const now = new Date();

    return (<>
        <div className={"h-full w-full "}>
            <Wordclock time={now.getTime()} style={props.style} />
        </div>
    </>)
}

export default WordClockDashboard;