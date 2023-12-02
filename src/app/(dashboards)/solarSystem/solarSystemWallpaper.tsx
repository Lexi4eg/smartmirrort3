import React from 'react';
import "./styles.css";
import {Anton} from "next/font/google"


interface Props {
    style?: string | undefined;
}
const anton = Anton({
    weight: '400',
    subsets: ['latin-ext'],
    style: 'normal'
})

export default function SolarSystemWallpaper(props: Props) {
    return (
        <>

        <div className={`solar-system bg-black min-w-screen min-h-screen ${props.style}`}>
            <div className="text-7xl w-full justify-center flex p-10  ">
                <div className={anton.className}>THE SOLAR SYSTEM
                </div>
            </div>

            <div className="sun"></div>
            {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className={`orbit orbit${i + 1}`}>
                    <div className={`planet planet${i + 1}`}></div>
                </div>
            ))}
        </div>
        </>
    );
}