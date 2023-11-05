"use client";
import {getServerAuthSession} from "~/server/auth";
import {useEffect, useState} from "react";

interface Props {
    style?: string;
    username: string;
    time : number;
}

 function WelcomeWidget(props: Props) {
    const [greeting, setGreeting] = useState("");
    const [now , setNow] = useState(new Date(props.time));
    const [hour, setHour] = useState<number>(now.getHours());





    useEffect(() => {

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
            className={`relative w-full h-full justify-center items-center flex flex-col text-center p-4 text-5xl ${ props.style == "nightmode" ? "text-nightmode" : "text-white"
            }`}
        >
            <div className="">
                <div className="">{greeting}</div>
                <div className={"text-6xl"}>
                    {props.username}
                </div>
            </div>
        </div>
    );
}

export default WelcomeWidget;