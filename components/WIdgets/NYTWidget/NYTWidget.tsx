"use client"
import React, { useState, useEffect } from 'react';
import "./nyt.scss";
import Image from "next/image";

interface Props {
    style?: string;
}

interface Article {
    title: string;
    abstract: string;
    imageURl: string;
}

const NYTWidget = (props: Props) => {
    const [data, setData] = useState<Article[] | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchData = async () => {
        const res = await fetch(`http://localhost:3000/api/getNYT`);
        const jsonData = await res.json();
        setData(jsonData);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 5) % (data ? data.length : 1));
        }, 20000);
        return () => clearInterval(interval);
    }, [data]);

    return (
        <div className="max-h-screen overflow-y-auto p-4">
            <div className="mb-4 flex justify-center text-3xl">News to go </div>
            <button onClick={fetchData} className={"text-center  w-full"}>Fetch NYT Data</button>
            {data && data.slice(currentIndex, currentIndex + 5).map((article, index ) => (
                <NewsItem key={index} title={article.title} abstract={article.abstract} imageURl={article.imageUrl} />
            ))}
        </div>
    );
};

const NewsItem = (props: Article) => {
    return (
        <div className="bg-zinc-900 flex flex-row shadow-lg rounded-lg p-4 mb-4 animate-fade-in-down">
            <div className="flex flex-col">
            <h2 className="text-2xl mb-2">{props.title}</h2>
            <p className="text-gray-300">{props.abstract}</p>
            </div>
            <Image src={props.imageURl} alt="" width={400} height={400} className={"rounded-xl"} />
        </div>
    );
}

export default NYTWidget;