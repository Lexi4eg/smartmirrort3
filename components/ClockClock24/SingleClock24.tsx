import React from 'react';
import ConvertStringToHourMinute from "../Clocks/MillionClock/ConvertStringToHourMinute";

interface ClockProps {
    minutedegree: number | undefined;
    hourdegree: number | undefined;
    style?: string | undefined;
}

function SingleClockFull(props: ClockProps) {

    const hourRotation = props.hourdegree ? props.hourdegree : 0;
    const minuteRotation = props.minutedegree ? props.minutedegree : 0;


    return (
        <div className={`flex justify-center w-56 border  h-56 rounded-full p-1 group ${props.style === "nightmode" ? "text-nightmode" : ""}`}>
            <div className="relative flex w-full h-full items-center justify-end rounded-full shadow-sm overflow-hidden ">
                <div
                    className={`flex w-1/2 h-1  rounded-full origin-left ${props.style === "nightmode" ? "bg-nightmode" : "bg-white"}`}
                    style={{
                        transform: `rotateZ(${hourRotation}deg)`,
                        transition: 'transform 0.5s ease-in-out',
                    }}
                >
                    <div className={`w-1/2 h-1/2  rounded-full ${props.style === "nightmode" ? "bg-nightmode" : "bg-white"}`} />
                </div>

                <div
                    className={`absolute w-1/2 h-1  rounded-full origin-left ${props.style === "nightmode" ? "bg-nightmode" : "bg-white"}`}
                    style={{
                        transform: `rotateZ(${minuteRotation}deg)`,
                        transition: 'transform 0.5s ease-in-out',
                    }}
                >
                    <div className={`w-2/3 h-full  rounded-full ${props.style === "nightmode" ? "bg-nightmode" : "bg-white"}`} />
                </div>

                <div className="absolute flex justify-center flex-1 w-full">
                    <div className={`w-1 h-1 bg-black rounded-full ${props.style === "nightmode" ? "bg-nightmode" : "bg-white"}`} />
                </div>
            </div>
        </div>
    );
}

export default SingleClockFull;