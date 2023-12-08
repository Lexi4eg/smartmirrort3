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

    const sendMessage = (formData : FormData) => {

        const text = formData.get('mode');
        console.log(text);
        socket.emit('mode', text);
    };

    return (
        <>
            <div className="w-screen h-screen overflow-hidden overflow-y-hidden bg-[#1B1D1D] text-[#E4E1DC]">
                <div className="p-3 text-3xl flex justify-center ">
                    Mobile Control app
                </div>
                <form action={sendMessage}>
                    <input
                        type="text"
                        name="mode"
                        className="mb-4"
                    />
                    <button type="submit">
                        <div className="p-3 text-3xl flex justify-center ">
                            Remote Test
                        </div>
                    </button>
                </form>
            </div>
        </>
    )
}