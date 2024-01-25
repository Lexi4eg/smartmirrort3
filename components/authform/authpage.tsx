"use client";
import Image from "next/image";
import {Roboto} from "next/font/google";
import {signIn} from "next-auth/react";

const roboto = Roboto({
  weight: "500",
  subsets: ["latin-ext"],
  style: "normal",
});
export default function AuthenticationPage() {
  return (
    <div
      className={
        "min-w-screen flex h-full max-h-screen min-h-screen w-full flex-col overflow-hidden overflow-y-hidden bg-[#1B1D1D] text-[#E4E1DC]"
      }
    >
      <div className="flex  w-full flex-row justify-between px-5 py-3">
        <div className="">Smart Mirror UI</div>
        <div className="">. . .</div>
      </div>
      <div className="flex h-screen w-screen justify-center pt-20">
        <div className="flex h-1/2 w-1/3  justify-center rounded-3xl bg-[#191A1B] shadow-md">
          <div className="flex flex-col items-center justify-center">
            <Image
              src={"/applelogin.png"}
              alt={""}
              width={200}
              height={200}
            ></Image>
            <div className="p-10 text-center text-4xl">Smart Mirror UI</div>

            <button
              onClick={() => signIn("google")}
              className="rounded-lg bg-[#191A1B]  p-3 text-xl shadow"
            >
              <div className={roboto.className}>Sign In</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
