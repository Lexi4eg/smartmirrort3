"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';


interface Props {
    date: string;
    copyright: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}


interface NasaWidgetProps {
    style?: string;
}
const NasaWidget = ({style = ""}: NasaWidgetProps) => {
    const [nasaData, setNasaData] = useState<Props>();

    const fetchNasaData = async () => {
        const response = await fetch(
            'https://api.nasa.gov/planetary/apod?api_key=eQNlkWnRk6fiiYb51PXM9sB7IdTZZcUPhSKJrbjX'
        );
        const data: Props = await response.json();
        setNasaData(data);
        console.log(data)
    };

    return (
        <div className={`flex justify-center items-center flex-col ${style === "nightmode" ? "text-nightmode" : "text-white"}`}>
            <button onClick={fetchNasaData} className={"text-center  w-full"}>Fetch Nasa Data</button>
            {nasaData && (
                <>
                <Image
                    src={nasaData.url}
                    alt={""}
                    width={2000}
                    height={2000}
                    className={"rounded-xl"}
                />
                <div >{nasaData.title}</div>

                </>
            )}
        </div>
    );
};

export default NasaWidget;