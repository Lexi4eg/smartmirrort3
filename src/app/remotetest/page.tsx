"use client"
import React, { useState } from 'react';

export default function Page () {
    const [text, setText] = useState('');
    const [header, setHeader] = useState('My Custom Header');

    const sendreq = async () => {
        const response = await fetch(
            'http://192.168.178.57:3000/api/remotetest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Custom-Header': text,
                },
                body: JSON.stringify({control: text}),
            }
        );
        console.log(await response.json());
    };

    return (
        <>
            <div className="w-screen h-screen overflow-hidden overflow-y-hidden bg-[#1B1D1D] text-[#E4E1DC]">
                <div className="p-3 text-3xl flex justify-center ">
                    Mobile Control app
                </div>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="mb-4"
                />
                <button onClick={sendreq}>
                    <div className="p-3 text-3xl flex justify-center ">
                        Remote Test
                    </div>
                </button>
            </div>
        </>
    )
}