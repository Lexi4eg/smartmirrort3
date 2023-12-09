"use client";

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://192.168.178.57:3001'); // Replace with your server URL

interface Mode {
    id : number,
    mode : number
}

export default function Page () {
    const [mode, setMode] = useState<Mode>({id: 1, mode: 1});

    const sendMessage = (mode : number) => {
        console.log(mode);
        socket.emit('mode', mode);
    };

    return (
        <>
            <div className="w-screen h-screen overflow-hidden overflow-y-hidden bg-[#1B1D1D] text-[#E4E1DC]">
                <div className="p-3 text-3xl flex justify-center ">
                    Mobile Control app
                </div>
                <div className="">
                    <button onClick={() => sendMessage(1)}>
                        <div className="p-3 text-3xl flex justify-center ">
                            Mode 1
                        </div>
                    </button>
                    <button onClick={() => sendMessage(2)}>
                        <div className="p-3 text-3xl flex justify-center ">
                            Mode 2
                        </div>
                    </button>
                    <button onClick={() => sendMessage(3)}>
                        <div className="p-3 text-3xl flex justify-center ">
                            Mode 3
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}