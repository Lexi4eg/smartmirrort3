import React from 'react';

interface ClockProps {
    input : string;
}

function Clock(props: ClockProps) {
    // program the hour so that there are 90 degrees steps from 1 to 4
    let input = ConvertStringToHourMinute(props.input) as number[];

    const hourRotation = input && input.length >= 1 ? input[0] : 0;
    const minuteRotation =  input && input.length >= 2 ? input[1] : 0;


    function ConvertStringToHourMinute (input: string){
        if(input ==="─"){
            return [0, 180];
        }
        if(input ==="│"){
            return [90, 270];
        }
        if(input ==="┌"){
            return [0, 90];
        }
        if(input ==="┐"){
            return [90, 180];
        }
        if(input ==="└"){
            return [0, 270];
        }
        if(input ==="┘"){
            return [180, 270];

        }

    }


    return (
        <div className="flex justify-center bg-white  rounded-full  p-1 group ">
            <div className="relative flex items-center justify-end w-7 h-7  rounded-full shadow-sm  overflow-hidden  ">
                <div className="absolute w-1/2 h-1 bg-black rounded-full origin-left " style={{ transform: `rotateZ(${hourRotation}deg)` }} >
                    <div className="w-2/3 h-2/3  bg-black rounded-full" />
                </div>

                <div className="absolute w-1/2 h-1 bg-black rounded-full origin-left" style={{ transform: ` rotateZ(${minuteRotation}deg)` }}>
                    <div className="w-2/3 h-full  bg-black rounded-full" />
                </div>

                <div className="absolute flex justify-center flex-1 w-full">
                    <div className="w-1 h-1  bg-black rounded-full" />
                </div>
            </div>
        </div>
    );
}

export default Clock;