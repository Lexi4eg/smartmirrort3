import React from 'react';

interface ClockProps {
    hour: number;
    minute: number;
}

function Clock(props: ClockProps) {
    const minuteRotation = props.minute * 6;
    const hourRotation = props.hour * 30 + props.minute * 0.5;

    return (
        <div className="relative w-7 h-7">
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="relative w-full h-full bg-white rounded-full shadow">
                    <div className="absolute h-1 w-3 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ transform: `rotate(${minuteRotation}deg)` }} />
                    <div className="absolute h-2 w-2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2" style={{ transform: `rotate(${hourRotation}deg)` }} />
                </div>
            </div>
        </div>
    );
}

export default Clock;