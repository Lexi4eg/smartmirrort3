"use client";

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your server URL

interface Mode {
    id : number,
    mode : number
}

export const revalidate = 1;

export default async function Page () {
    const [mode, setMode] = useState<Mode>({id: 1, mode: 1});


    const text = mode?.mode ?? 1;


    const sendMessage = () => {
        socket.emit('mode', text);

    };


    return (
        <>
            <div className="w-screen h-screen overflow-hidden overflow-y-hidden bg-[#1B1D1D] text-[#E4E1DC]">
                <div className="p-3 text-3xl flex justify-center ">
                    Mobile Control app
                </div>
                <form onSubmit=  {sendMessage}>

                <input
                    type="text"
                    name="mode"
                    defaultValue={text}
                    className="mb-4"
                />
                <button type={"submit"}>
                    <div className="p-3 text-3xl flex justify-center ">
                        Remote Test
                    </div>
                </button>
                </form>
            </div>
        </>
    )
}