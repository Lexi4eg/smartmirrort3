"use client";
import {getServerAuthSession} from "~/server/auth";
import {useEffect, useState} from "react";

interface Props {
    style?: string;
    username: string;
}

 function WelcomeWidget(props: Props) {
    const [isNightRedMode, setIsNightRedMode] = useState(false);
    const [greeting, setGreeting] = useState("");


    const now = new Date();
    const hour = now.getHours();




    useEffect(() => {
        if(props.style === "nightmode"){
            setIsNightRedMode(true);
        }
        if (hour >= 5 && hour < 12) {
            setGreeting("Good morning ");
        } else if (hour >= 12 && hour < 17) {
            setGreeting("Good afternoon");
        } else {
            setGreeting("Good evening");
        }
    }, [hour]);


    return (
        <div
            className={`relative w-full h-full justify-center items-center flex flex-col text-center p-4 text-5xl ${
                isNightRedMode ? "text-nightmode " : ""
            }`}
        >
            <div className="">
                <div className="welcome-text">{greeting}</div>
                <div className={"text-6xl"}>
                    {props.username}
                </div>
            </div>
        </div>
    );
}

export default WelcomeWidget;