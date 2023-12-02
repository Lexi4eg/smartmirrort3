"use client"
import "./styles.css";
import React, { useState, useEffect } from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';


interface Props {
    style?: string | undefined;
}

export default function FlipDotClock(props: Props) {
    const timetomidnight = new Date();
    timetomidnight.setHours(24, 0, 0, 0);
    const currenttime = new Date();
     const diff = timetomidnight.getTime() - currenttime.getTime();



    return <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000} labels={["", "", "", ""]}  />;
}