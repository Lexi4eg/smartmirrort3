"use client";

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import {Roboto} from "next/font/google";


const socket = io('http://192.168.178.57:3001'); // Replace with your server URL



const roboto = Roboto({
    weight: '300',
    subsets: ['latin-ext'],
    style: 'normal'
})

const roboto2 = Roboto({
    weight: '100',
    subsets: ['latin-ext'],
    style: 'normal'
})

interface Mode {
    id : number,
    mode : number
}

export default function Page () {
    const [mode, setMode] = useState<Mode>({id: 1, mode: 1});
    const [temperature, setTemperature] = useState<number>(20);
    const [humidity, setHumidity] = useState<number>(50);
    const sendMessage = (mode : number) => {
        console.log(mode);
        socket.emit('mode', mode);
    };

    return (
        <>
            <div className= {roboto.className}>
                <div className="w-screen h-screen p-5 bg-[#161618] flex sm:hidden flex-col overflow-hidden overflow-y-hidden  text-[#E4E1DC]">
                    <div className="pt-2 pb-3 text-2xl  ">
                        Hello, Felix Prattes
                    </div>
                    <div className="">
                        Smart Mirror Alpha 1.1
                    </div>
                    <div className="bg-[#1B1D1D] justify-center  w-full h-full rounded-md">
                        <div className="px-4 py-2 font-light ">Mode Selector </div>
                        <div className=" my-3 m-3  p-4 flex-col flex w-fit  bg-[#212124] rounded-xl">
                            <div className="flex  justify-between ">
                                <button onClick={() => sendMessage(1)}>
                                    <div className="p-3 px-5 items-center text-center text-3xl flex justify-center  ">
                                         1
                                    </div>
                                </button>
                                <button onClick={() => sendMessage(2)}>
                                    <div className="p-3 px-5 items-center text-center text-3xl flex justify-center  ">
                                         2
                                    </div>
                                </button>
                                <button onClick={() => sendMessage(3)}>
                                    <div className="p-3 px-5 items-center text-center text-3xl flex justify-center ">
                                         3
                                    </div>
                                </button>
                            </div>
                            <div className="flex justify-between">
                                <button onClick={() => sendMessage(4)}>
                                    <div className="p-3 px-5 items-center text-center text-3xl flex justify-center ">
                                        4
                                    </div>
                                </button>
                                <button onClick={() => sendMessage(5)}>
                                    <div className="p-3 px-5 items-center text-center text-3xl flex justify-center ">
                                        5
                                    </div>
                                </button>
                                <button onClick={() => sendMessage(6)}>
                                    <div className="p-3 px-5 items-center text-center text-3xl flex justify-center ">
                                        6
                                    </div>
                                </button>
                            </div>
                            <div className="flex justify-between">
                                <button onClick={() => sendMessage(7)}>
                                    <div className="p-3 px-5 items-center text-center text-3xl flex justify-center ">
                                        7
                                    </div>
                                </button>
                                <button onClick={() => sendMessage(8)}>
                                    <div className="p-3 px-5 items-center text-center text-3xl flex justify-center ">
                                        8
                                    </div>
                                </button>
                                <button onClick={() => sendMessage(9)}>
                                    <div className="p-3 px-5 items-center text-center text-3xl flex justify-center ">
                                        9
                                    </div>
                                </button>
                            </div>
                        </div>

                            <div className="flex w-full h-full" >
                                <div className=" bg-[#212124] rounded-md p-2 m-2 w-1/2 h-1/4">
                                    <div className={roboto2.className}>

                                        <div className="text-center pt-5 text-xl">
                                            Temperature
                                        </div>
                                        <div className="text-5xl text-center font-extralight p-2">
                                            {temperature}°C
                                        </div>
                                    </div>
                                </div>
                                <div className=" bg-[#212124] rounded-md p-2 m-2 w-1/2 h-1/4">
                                    <div className={roboto2.className}>
                                        <div className="text-center pt-5 text-xl">
                                            Humidity
                                        </div>
                                        <div className="text-5xl text-center font-extralight p-2">
                                            {humidity}%
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        </>
    )
}