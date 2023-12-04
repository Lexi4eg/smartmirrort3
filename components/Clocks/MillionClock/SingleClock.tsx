import React from 'react';
import ConvertStringToHourMinute from './ConvertStringToHourMinute';

interface ClockProps {
    input: string | undefined | number;
    minutedegree: number | undefined;
    hourdegree: number | undefined;
    mavemode: boolean | undefined;
    style?: string | undefined;
    isFull?: boolean;
}

function SingleClock(props: ClockProps) {
    let input = ConvertStringToHourMinute(props.input) as number[];
    if(props.mavemode){
        //@ts-ignore
        input = [props.hourdegree, props.minutedegree];
    }
    const hourRotation = input && input.length >= 1 ? input[0] : 0;
    const minuteRotation = input && input.length >= 2 ? input[1] : 0;
    const nightModeClass = props.style === "nightmode" ? "bg-nightmode" : "bg-white";

    return (
        <div className={`flex justify-center w-full h-full rounded-full p-1 group ${props.style === "nightmode" ? "text-nightmode" : ""}`}>
            <div className={`relative flex ${props.isFull ? "w-full h-full" : "w-4 h-4"} items-center justify-end rounded-full shadow-sm overflow-hidden `}>
                <div
                    className={`flex w-1/2 h-1  rounded-full origin-left ${nightModeClass}`}
                    style={{
                        transform: `rotateZ(${hourRotation}deg)`,
                        transition: 'transform 0.5s ease-in-out',
                    }}
                >
                    <div className={`w-${props.isFull ? "1/2" : "2/3"} h-${props.isFull ? "1/2" : "2/3"}  rounded-full ${nightModeClass}`} />
                </div>

                <div
                    className={`absolute w-1/2 h-1  rounded-full origin-left ${nightModeClass}`}
                    style={{
                        transform: `rotateZ(${minuteRotation}deg)`,
                        transition: 'transform 0.5s ease-in-out',
                    }}
                >
                    <div className={`w-2/3 h-full  rounded-full ${nightModeClass}`} />
                </div>

                <div className="absolute flex justify-center flex-1 w-full">
                    <div className={`w-1 h-1 bg-black rounded-full ${nightModeClass}`} />
                </div>
            </div>
        </div>
    );
}

export default SingleClock;