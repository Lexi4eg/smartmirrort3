"use client";
import React from "react";
import sendMessage from "./remote";

interface ButtonProps {
  number: number;
}

const Button = ({ number }: ButtonProps) => (
  <button onClick={() => sendMessage(number)}>
    <div className="flex items-center justify-center p-3 px-5 text-center text-3xl">
      {number}
    </div>
  </button>
);

export default function Mode_Selector() {
  return (
    <div className="h-full w-full justify-center rounded-md">
      <div className="px-4 py-2 font-light">Mode Selector</div>
      <div className="m-3 my-3 grid w-fit grid-cols-3 grid-rows-3 flex-col rounded-xl bg-[#212124] p-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number, index) => (
          <div key={index} className="flex justify-between">
            <Button number={number} />
          </div>
        ))}
      </div>
    </div>
  );
}
