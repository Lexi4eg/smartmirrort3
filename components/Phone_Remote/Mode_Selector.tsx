"use client";
import React from "react";
import sendMessage from "./remote";

export default function Mode_Selector() {
  return (
    <div className=" h-full  w-full justify-center rounded-md">
      <div className="px-4 py-2 font-light ">Mode Selector </div>
      <div className=" m-3 my-3  flex w-fit flex-col rounded-xl  bg-[#212124] p-4">
        <div className="flex  justify-between ">
          <button onClick={() => sendMessage(1)}>
            <div className="flex items-center justify-center p-3 px-5 text-center text-3xl  ">
              1
            </div>
          </button>
          <button onClick={() => sendMessage(2)}>
            <div className="flex items-center justify-center p-3 px-5 text-center text-3xl  ">
              2
            </div>
          </button>
          <button onClick={() => sendMessage(3)}>
            <div className="flex items-center justify-center p-3 px-5 text-center text-3xl ">
              3
            </div>
          </button>
        </div>
        <div className="flex justify-between">
          <button onClick={() => sendMessage(4)}>
            <div className="flex items-center justify-center p-3 px-5 text-center text-3xl ">
              4
            </div>
          </button>
          <button onClick={() => sendMessage(5)}>
            <div className="flex items-center justify-center p-3 px-5 text-center text-3xl ">
              5
            </div>
          </button>
          <button onClick={() => sendMessage(6)}>
            <div className="flex items-center justify-center p-3 px-5 text-center text-3xl ">
              6
            </div>
          </button>
        </div>
        <div className="flex justify-between">
          <button onClick={() => sendMessage(7)}>
            <div className="flex items-center justify-center p-3 px-5 text-center text-3xl ">
              7
            </div>
          </button>
          <button onClick={() => sendMessage(8)}>
            <div className="flex items-center justify-center p-3 px-5 text-center text-3xl ">
              8
            </div>
          </button>
          <button onClick={() => sendMessage(9)}>
            <div className="flex items-center justify-center p-3 px-5 text-center text-3xl ">
              9
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
