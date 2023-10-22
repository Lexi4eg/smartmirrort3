"use client"
import React, {useState} from 'react';
import axios from 'axios';
import Image from 'next/image';

interface WeatherData {
    name: string;
    weather: {
        icon: string;
        main: string;
        description: string;
    }[];
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
}

const WeatherWidget = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);

    const fetchWeather = () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Graz&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
        axios.get(url).then((response) => {
            setWeather(response.data);
        });
        console.log(weather);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center p-4 rounded-md">
                <button onClick={fetchWeather} className="mb-2">
                    Refresh
                </button>
                {weather ? (
                    <>
                        <div className="flex flex-row border border-white rounded-2xl p-3">
                            <div className="flex flex-col justify-between">
                                <div className="flex  items-center justify-center p-2">

                                    {weather && weather.weather && weather.weather[0] && (
                                        <Image
                                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                                            alt="/"
                                            width={100}
                                            height={100}
                                        />
                                    )}
                                    <div className="flex flex-row ">
                                        <p className="text-9xl">{weather.main.temp.toFixed(0)}</p>
                                        <div className="text-4xl">&#176;C</div>
                                    </div>
                                </div>

                                <p className="text-3xl text-center p-4">{weather.name}, Austria</p>

                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex flex-col justify-center  w-full p-2">
                                    <div className="flex flex-row items-center">
                                        {weather && weather.weather && weather.weather[0] && (

                                        <p className="w-full text-center text-4xl">{weather.weather[0].description} </p>)}

                                    </div>
                                    <div className="flex flex-row items-center">
                                        <p className="text-2xl p-2">Wind: </p>
                                        <p className="font-bold text-2xl">{weather.wind.speed.toFixed(0)} kph</p>

                                    </div>
                                    <div className="flex flex-row items-center">
                                        <p className="text-2xl p-2">Temperature</p>
                                        <p className="font-bold text-2xl">{weather.main.feels_like.toFixed(0)}&#176;C</p>

                                    </div>
                                    <div className="flex flex-row items-center">
                                        <p className="text-2xl p-2">Humidity</p>
                                        <p className="font-bold text-2xl">{weather.main.humidity}%</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};

export default WeatherWidget;