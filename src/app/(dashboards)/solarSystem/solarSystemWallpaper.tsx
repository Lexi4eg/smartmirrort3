import React from 'react';
import "./styles.css";

interface Props {
    style?: string | undefined;
}

export default function SolarSystemWallpaper(props: Props) {
    return (
        <div className={`solar-system bg-black min-w-screen min-h-screen ${props.style}`}>
            <div className="sun"></div>
            {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className={`orbit orbit${i + 1}`}>
                    <div className={`planet planet${i + 1}`}></div>
                </div>
            ))}
        </div>
    );
}