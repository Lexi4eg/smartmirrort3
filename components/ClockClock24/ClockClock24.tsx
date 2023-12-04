"use client"
import React, {useEffect, useState} from 'react';
import "./ClockClock24.css";


interface Digit {
    hour: number;
    minute: number;
}

const ClockClock24: React.FC = () => {
    const [time, setTime] = useState<string>('----');
    const [specialState, setSpecialState] = useState<Digit[] | null>(null);

    const digits  = [
        [    // 0
            { hour: 6, minute: 15 },
            { hour: 9, minute: 30 },
            { hour: 6, minute: 0 },
            { hour: 0, minute: 30 },
            { hour: 3, minute: 0 },
            { hour: 0, minute: 45 }
        ], [ // 1
            { hour: 7.5, minute: 37.5 },
            { hour: 6, minute: 30 },
            { hour: 7.5, minute: 37.5 },
            { hour: 6, minute: 0 },
            { hour: 7.5, minute: 37.5 },
            { hour: 0, minute: 0 }
        ], [ // 2
            { hour: 3, minute: 15 },
            { hour: 9, minute: 30 },
            { hour: 6, minute: 15 },
            { hour: 0, minute: 45 },
            { hour: 0, minute: 15 },
            { hour: 9, minute: 45 }
        ], [ // 3
            { hour: 3, minute: 15 },
            { hour: 9, minute: 30 },
            { hour: 3, minute: 15 },
            { hour: 9, minute: 0 },
            { hour: 3, minute: 15 },
            { hour: 9, minute: 0 }
        ], [ // 4
            { hour: 6, minute: 30 },
            { hour: 6, minute: 30 },
            { hour: 0, minute: 15 },
            { hour: 6, minute: 0 },
            { hour: 7.5, minute: 37.5 },
            { hour: 0, minute: 0 }
        ], [ // 5
            { hour: 6, minute: 15 },
            { hour: 9, minute: 45 },
            { hour: 0, minute: 15 },
            { hour: 6, minute: 45 },
            { hour: 3, minute: 15 },
            { hour: 0, minute: 45 }
        ], [ // 6
            { hour: 6, minute: 15 },
            { hour: 9, minute: 45 },
            { hour: 6, minute: 0 },
            { hour: 6, minute: 45 },
            { hour: 0, minute: 15 },
            { hour: 0, minute: 45 }
        ], [ // 7
            { hour: 3, minute: 15 },
            { hour: 6, minute: 45 },
            { hour: 7.5, minute: 37.5 },
            { hour: 6, minute: 0 },
            { hour: 7.5, minute: 37.5 },
            { hour: 0, minute: 0 }
        ], [ // 8
            { hour: 6, minute: 15 },
            { hour: 6, minute: 45 },
            { hour: 0, minute: 15 },
            { hour: 0, minute: 45 },
            { hour: 0, minute: 15 },
            { hour: 0, minute: 45 }
        ], [ // 9
            { hour: 6, minute: 15 },
            { hour: 6, minute: 45 },
            { hour: 3, minute: 0 },
            { hour: 6, minute: 0 },
            { hour: 3, minute: 15 },
            { hour: 0, minute: 45 }
        ]
    ];

    const happyDigit: Digit[] = Array(6).fill({ hour: 22.5, minute: 7.5 });
    const neutralDigit: Digit[] = Array(6).fill({ hour: 7.5, minute: 7.5 });

    const hourToDegrees = (hour: number) => hour * (360 / 12) - 90;
    const minuteToDegrees = (minute: number) => minute * (360 / 60) - 90;

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date(Date.now() + 10000).toTimeString();
            if (currentTime !== time) {
                setTime(currentTime);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    const showSpecialState = (digit: Digit[]) => {
        stopClock();
        for (let x = 0; x < 4; x++) {
            setDigit(x, digit);
        }
        setTimeout(() => startClock(), 10000);
    };

    const handleClickLeft = () => showSpecialState(happyDigit);
    const handleClickRight = () => showSpecialState(neutralDigit);

    const setHands = (id: number, hour: number, minute: number) => {
        const clock = document.querySelector(`.clock--${id}`);
        clock?.style.setProperty(`--small-hand`, `${hourToDegrees(hour) + 360}deg`);
        clock?.style.setProperty(`--large-hand`, `${minuteToDegrees(minute) - 360}deg`);
    }

    const setDigit = (id: number, values: Digit[]) => {
        for (let x = 0; x < 6; x++) {
            setHands(id * 6 + x, values[x].hour, values[x].minute);
        }
    }

    let state: string;
    let interval: NodeJS.Timeout;

    const startClock = () => {
        state = '----';
        interval = setInterval(() => {
            const currentTime = new Date(Date.now() + 10000).toTimeString();
            if (currentTime !== state) {
                setTime(currentTime);
                state = currentTime;
            }
        }, 1000);
    }

    const stopClock = () => {
        clearInterval(interval);
    }

    startClock();

    const digitsElements = Array.from({ length: 4 }, (_, d) =>
        Array.from({ length: 6 }, (_, c) =>
            <svg key={c} className={`clock clock--${d * 6 + c}`} width="100" height="100" viewBox="0 0 100 100">
                <path className="clock-smallHand" d="M50,47 C48.3431458,47 47,48.3431458 47,50 C47,51.6568542 48.3431458,53 50,53 L95,53 L95,47 L50,47 Z" stroke="none" fill="#4A4A4A" fillRule="evenodd"/>
                <path className="clock-largeHand" d="M50,47 C48.3431458,47 47,48.3431458 47,50 C47,51.6568542 48.3431458,53 50,53 L100,53 L100,47 L50,47 Z" stroke="none" fill="#4A4A4A" fillRule="evenodd"/>
            </svg>
        )
    );

    return (
        <div className="art">
            {digitsElements.map((digit, index) => <div key={index} className="digit">{digit}</div>)}
            <div className="text">
                <h1>Clock Clock 24</h1>
            </div>
            <div className="trigger trigger--left" onClick={handleClickLeft}></div>
            <div className="trigger trigger--right" onClick={handleClickRight}></div>
        </div>
    );
}

export default ClockClock24;