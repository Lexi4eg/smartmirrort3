
"use client";
import React, { useState, useEffect, useRef } from 'react';
import Clock from "~/app/_components/MillionClock/Clock";


interface ClockProps {
    time: number;
    style?: string;
}
const ClockWidget = (props: ClockProps) => {
    const [time, setTime] = useState<Date>(new Date(props.time));
    const requestRef = useRef<number>();

    const animate = () => {
        setTime(new Date());
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
        hourLines.push(<line key={`hour-${i}`} x1={Math.round(x1)} y1={Math.round(y1)} x2={Math.round(x2)} y2={Math.round(y2)} stroke={props.style === "nightmode" ? "red" : "white"} strokeWidth="2" />);
    }

    const minuteLines = [];
    for (let i = 1; i <= 60; i++) {
        if (i % 5 !== 0) {
            const angle = i * 6;
            const x1 = 50 + 40 * Math.sin(angle * Math.PI / 180);
            const y1 = 50 - 40 * Math.cos(angle * Math.PI / 180);
            const x2 = 50 + 70 * Math.sin(angle * Math.PI / 180);
            const y2 = 50 - 70 * Math.cos(angle * Math.PI / 180);
            minuteLines.push(<line key={`minute-${i}`} x1={Math.round(x1)} y1={Math.round(y1)} x2={Math.round(x2)} y2={Math.round(y2)} stroke={props.style === "nightmode" ? "red" : "white"} strokeLinecap="round" strokeWidth="0.5" />);
        } else {
            const angle = i * 6;
            const x1 = 50 + 38 * Math.sin(angle * Math.PI / 180);
            const y1 = 50 - 38 * Math.cos(angle * Math.PI / 180);
            const x2 = 50 + 70 * Math.sin(angle * Math.PI / 180);
            const y2 = 50 - 70 * Math.cos(angle * Math.PI / 180);
            minuteLines.push(<line key={`minute-${i}`} x1={Math.round(x1)} y1={Math.round(y1)} x2={Math.round(x2)} y2={Math.round(y2)} stroke={props.style === "nightmode" ? "red" : "white"} strokeLinecap="round" strokeWidth="2" />);
        }
    }

    return (
        <div key="clock-widget" className="flex items-center w-full h-full justify-center">
            <div className="absolute top-0 left-0 flex 2xl:p-2 rounded-3xl justify-center items-center w-full h-full max-w-full max-h-full">
                <svg viewBox="0 0 100 100" className={`border rounded-2xl ${props.style === "nightmode" ? "text-nightmode border-nightmode" : ""}`}>
                    <circle cx="50" cy="50" r="2" fill={props.style === "nightmode" ? "red" : "white"} />
                    {hourLines}
                    {minuteLines}

                    <line x1="50" y1="40" x2="50" y2="20" stroke={props.style === "nightmode" ? "red" : "white"} strokeWidth="3" strokeLinecap="round" transform={`rotate(${hourAngle}, 50, 50)`} />
                    <line x1="50" y1="40" x2="50" y2="5" stroke={props.style === "nightmode" ? "red" : "white"} strokeWidth="2" strokeLinecap="round" transform={`rotate(${minuteAngle}, 50, 50)`} />
                    <line x1="50" y1="50" x2="50" y2="20" stroke={props.style === "nightmode" ? "red" : "white"} strokeWidth="1" strokeLinecap="round" transform={`rotate(${hourAngle}, 50, 50)`} />
                    <line x1="50" y1="50" x2="50" y2="20" stroke={props.style === "nightmode" ? "red" : "white"} strokeWidth="1" strokeLinecap="round" transform={`rotate(${minuteAngle}, 50, 50)`} />
                    <line x1="50" y1="55" x2="50" y2="5" stroke={props.style === "nightmode" ? "red" : "white"} strokeWidth="1" strokeLinecap="round" transform={`rotate(${secondAngle}, 50, 50)`} />
                    <text x="50" y="25" textAnchor="middle" fill={props.style === "nightmode" ? "red" : "white"} fontSize="10">12</text>
                    <text x="50" y="80" textAnchor="middle" fill={props.style === "nightmode" ? "red" : "white"} fontSize="10">6</text>
                    <text x="75" y="53" textAnchor="middle" fill={props.style === "nightmode" ? "red" : "white"} fontSize="10">3</text>
                    <text x="25" y="53" textAnchor="middle" fill={props.style === "nightmode" ? "red" : "white"} fontSize="10">9</text>
                </svg>
            </div>
        </div>
    );
};

export default ClockWidget;