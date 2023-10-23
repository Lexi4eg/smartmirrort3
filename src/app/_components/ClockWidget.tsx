"use client";
import React, { useState, useEffect, useRef } from 'react';

const ClockWidget: React.FC = () => {
    const [time, setTime] = useState<Date>(new Date());
    const requestRef = useRef<number>();

    const animate = () => {
        setTime(new Date());
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current as number);
    }, [animate]);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourAngle = ((hours % 12) * 30 + minutes / 2);
    const minuteAngle = (minutes * 6);
    const secondAngle = (seconds * 6);

    const hourLines = [];
    for (let i = 1; i <= 12; i++) {
        const angle = i * 30;
        const x1 = 50 + 40 * Math.sin(angle * Math.PI / 180);
        const y1 = 50 - 40 * Math.cos(angle * Math.PI / 180);
        const x2 = 50 + 80 * Math.sin(angle * Math.PI / 180);
        const y2 = 50 - 80 * Math.cos(angle * Math.PI / 180);
        hourLines.push(<line key={`hour-${i}`} x1={Math.round(x1)} y1={Math.round(y1)} x2={Math.round(x2)} y2={Math.round(y2)} stroke="white" strokeWidth="2" />);
    }

    const minuteLines = [];
    for (let i = 1; i <= 60; i++) {
        if (i % 5 !== 0) {
            const angle = i * 6;
            const x1 = 50 + 40 * Math.sin(angle * Math.PI / 180);
            const y1 = 50 - 40 * Math.cos(angle * Math.PI / 180);
            const x2 = 50 + 70 * Math.sin(angle * Math.PI / 180);
            const y2 = 50 - 70 * Math.cos(angle * Math.PI / 180);
            minuteLines.push(<line key={`minute-${i}`} x1={Math.round(x1)} y1={Math.round(y1)} x2={Math.round(x2)} y2={Math.round(y2)} stroke="gray" strokeLinecap="round" strokeWidth="0.5" />);
        } else {
            const angle = i * 6;
            const x1 = 50 + 38 * Math.sin(angle * Math.PI / 180);
            const y1 = 50 - 38 * Math.cos(angle * Math.PI / 180);
            const x2 = 50 + 70 * Math.sin(angle * Math.PI / 180);
            const y2 = 50 - 70 * Math.cos(angle * Math.PI / 180);
            minuteLines.push(<line key={`minute-${i}`} x1={Math.round(x1)} y1={Math.round(y1)} x2={Math.round(x2)} y2={Math.round(y2)} stroke="white" strokeLinecap="round" strokeWidth="2" />);
        }
    }

    return (
        <div className="flex items-center w-full h-full justify-center ">
                    <div className="absolute top-0 left-0 flex p-4 rounded-3xl justify-center items-center w-full h-full">
                        <svg viewBox="0 0 100 100 " className={"border rounded-2xl"}>
                            <circle cx="50" cy="50" r="2" fill="white" />
                            {hourLines}
                            {minuteLines}

                            <line x1="50" y1="40" x2="50" y2="20" stroke="white" strokeWidth="3" strokeLinecap="round" transform={`rotate(${hourAngle}, 50, 50)`} />
                            <line x1="50" y1="40" x2="50" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round" transform={`rotate(${minuteAngle}, 50, 50)`} />
                            <line x1="50" y1="50" x2="50" y2="20" stroke="white" strokeWidth="1" strokeLinecap="round" transform={`rotate(${hourAngle}, 50, 50)`} />
                            <line x1="50" y1="50" x2="50" y2="20" stroke="white" strokeWidth="1" strokeLinecap="round" transform={`rotate(${minuteAngle}, 50, 50)`} />
                            <line x1="50" y1="55" x2="50" y2="5" stroke="orange" strokeWidth="1" strokeLinecap="round" transform={`rotate(${secondAngle}, 50, 50)`} />
                            <text x="50" y="25" textAnchor="middle" fill="white" fontSize="10">12</text>
                            <text x="50" y="80" textAnchor="middle" fill="white" fontSize="10">6</text>
                            <text x="75" y="53" textAnchor="middle" fill="white" fontSize="10">3</text>
                            <text x="25" y="53" textAnchor="middle" fill="white" fontSize="10">9</text>
                        </svg>
                    </div>

        </div>
    );
};

export default ClockWidget;