import React from 'react';

interface ClockProps {
    input: string | undefined;
    minutedegree: number | undefined;
    hourdegree: number | undefined;
    mavemode: boolean | undefined;
    style?: string | undefined;
}

function Clock(props: ClockProps) {
    // program the hour so that there are 90 degrees steps from 1 to 4
    let input = ConvertStringToHourMinute(props.input) as number[];
    if(props.mavemode){
        input = [props.hourdegree, props.minutedegree];
    }
    const hourRotation = input && input.length >= 1 ? input[0] : 0;
    const minuteRotation = input && input.length >= 2 ? input[1] : 0;

    function ConvertStringToHourMinute(input: string) {
        if (input === '─') {
            return [0, 180];
        }
        if (input === '│') {
            return [90, 270];
        }
        if (input === '┌') {
            return [0, 90];
        }
        if (input === '┐') {
            return [90, 180];
        }
        if (input === '└') {
            return [0, 270];
        }
        if (input === '┘') {
            return [180, 270];
        }
    }

    return (
        <div className={`flex justify-center w-full h-full rounded-full p-1 group ${props.style === "nightmode" ? "text-nightmode" : ""}`}>
            <div className="relative flex items-center justify-end w-4 h-4 rounded-full shadow-sm overflow-hidden ">
                <div
                    className={`absolute w-1/2 h-1  rounded-full origin-left ${props.style === "nightmode" ? "bg-nightmode" : "bg-white"}`}
                    style={{
                        transform: `rotateZ(${hourRotation}deg)`,
                        transition: 'transform 0.5s ease-in-out',
                    }}
                >
                    <div className={`w-2/3 h-2/3  rounded-full ${props.style === "nightmode" ? "bg-nightmode" : "bg-white"}`} />
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

export default Clock;