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
    imageUrl: string;
    style?: string;
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
        fetchData();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (data ? data.length : 1));
        }, 10000);
        return () => clearInterval(interval);
    }, [data]);

    const progress = data ? (currentIndex / data.length) * 100 : 0;

    return (
        <div className="max-h-screen overflow-y-auto ">
            {data && data.slice(currentIndex, currentIndex + 1).map((article, index ) => (
                <NewsItem key={index} title={article.title} abstract={article.abstract} imageUrl={article.imageUrl} style={props.style} />
            ))}
            <div className="mt-4 w-full">
                <div className="h-2 rounded bg-zinc-900">
                    <div style={{width: `${progress}%`}} className={`h-full rounded bg-nightmode  transition-all duration-500 ${props.style === "nightmode" ? "text-nightmode" : "text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}`}></div>
                </div>
            </div>
        </div>
    );
};

const NewsItem = (props: Article) => {
    return (
        <div className={`bg-zinc-900 w-full h-full flex flex-col shadow-lg rounded-lg  mb-4 animate-fade-in-down  ${props.style === "nightmode" ? "text-nightmode" : "text-white"}`}>
            <div className="z-0">
            <Image src={props.imageUrl} alt="" width={4000} height={4000} className={"rounded-t-xl"} />
            </div>
            <div className="p-3">
                <h2 className="text-2xl mb-2">{props.title}</h2>
                <p className={`${props.style === "nightmode" ? "text-nightmode" : "text-gray-300"}`}>{props.abstract}</p>
            </div>
        </div>
    );
}

export default NYTWidget;