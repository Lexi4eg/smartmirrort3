"use client";
import { useEffect, useState } from "react";
import { Roboto } from "next/font/google";

const black_Ops_One = Roboto({
    weight: "100",
    variable: "--font-inter",
    subsets: ["latin"],
});

const Wordclock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [timestring, setTimestring] = useState<string>("");
    const [highlightedIndexes, setHighlightedIndexes] = useState<number[]>([]);
    function timeString(h: number, m: number, settings = { round: false }) {
        var ret = "ESIST";
        h %= 12;
        if (h == 0) h = 12;
        var hourNames = [
            "EINS",
            "ZWEI",
            "DREI",
            "VIER",
            "FÜNF",
            "SECHS",
            "SIEBEN",
            "ACHT",
            "NEUN",
            "ZEHN",
            "ELF",
            "ZWÖLF",
        ];
        switch (
        (settings.round ? Math.round(m / 5) * 5 : Math.floor(m / 5) * 5) % 60
            ) {
            case 0:
                ret += (h == 1 ? "EIN" : hourNames[h - 1]) + "UHR";
                break;
            case 5:
                ret += "FÜNFNACH" + hourNames[h - 1];
                break;
            case 10:
                ret += "ZEHNNACH" + hourNames[h - 1];
                break;
            case 15:
                ret += "VIERTELNACH" + hourNames[h - 1];
                break;
            case 20:
                ret += "ZWANZIGNACH" + hourNames[h - 1];
                break;
            case 25:
                ret += "FÜNFVORHALB" + hourNames[h % 12];
                break;
            case 30:
                ret += "HALB" + hourNames[h % 12];
                break;
            case 35:
                ret += "FÜNFNACHHALB" + hourNames[h % 12];
                break;
            case 40:
                ret += "ZWANZIGVOR" + hourNames[h % 12];
                break;
            case 45:
                ret += "VIERTELVOR" + hourNames[h % 12];
                break;
            case 50:
                ret += "ZEHNVOR" + hourNames[h % 12];
                break;
            case 55:
                ret += "FÜNFVOR" + hourNames[h % 12];
                break;
        }

        setTimestring(ret);
        return ret;
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
            console.log(currentTime.getMinutes() % 5 )

        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setTimestring(timeString(currentTime.getHours(), currentTime.getMinutes()));
    }, [currentTime]);



    useEffect(() => {
        let x = 0;
        let highlighted = [];
        for (let i = 0; i < clock.length; i++) {
            // @ts-ignore
            for (let j = 0; j < clock[i].length; j++) {
                // @ts-ignore
                if (timestring[x] === clock[i][j]) {
                    // @ts-ignore
                    highlighted.push(i * clock[i].length + j);
                    x++;
                }
            }
        }
        setHighlightedIndexes(highlighted);
    }, [timestring]);

    const clock = [
        ["E", "S", "M", "I", "S", "T", "E", "F", "Ü", "N", "F"],
        ["X", "E", "H", "N", "Z", "W", "A", "N", "Z", "I", "G"],
        ["X", "I", "E", "R", "T", "E", "L", "X", "V", "O", "R"],
        ["N", "A", "C", "H", "V", "X", "R", "H", "A", "L", "B"],
        ["E", "I", "N", "X", "I", "N", "K", "Z", "W", "X", "I"],
        ["D", "R", "E", "I", "E", "A", "N", "V", "I", "E", "R"],
        ["F", "Ü", "N", "F", "N", "I", "S", "E", "C", "H", "S"],
        ["S", "I", "E", "B", "E", "N", "I", "A", "C", "H", "T"],
        ["N", "E", "U", "N", "Z", "E", "H", "N", "E", "L", "F"],
        ["Z", "W", "Ö", "L", "F", "K", "A", "B", "U", "H", "R"],
    ];

    return (
        <div className={"w-full h-full flex flex-col items-center justify-center"}>
            <div className="flex w-full flex-row justify-between">
                <div className={`  ${currentTime.getMinutes() % 5 == 1 || currentTime.getMinutes() % 5 == 2|| currentTime.getMinutes() % 5 ==3 || currentTime.getMinutes() % 5 ==4 ? "text-white" : "text-opacity-0 text-red-600" }`}>
                    ⬤
                </div>
                <div className={`  ${currentTime.getMinutes() % 5 == 2|| currentTime.getMinutes() % 5 ==3 || currentTime.getMinutes() % 5 ==4 ? "text-white" : "text-opacity-0 text-red-600" }`}>
                    ⬤
                </div>
            </div>



            <div className={"w-full h-full px-5 justify-center text-slate-700 items-center flex-col"}>
                <div className={"flex flex-col h-full justify-evenly"}>
                    {clock.map((row, rowIndex) => (
                        <div className={"flex flex-row justify-evenly"} key={rowIndex}>
                            {row.map((char, charIndex) => (
                                <Words
                                    key={charIndex}
                                    char={char}
                                    highlighted={highlightedIndexes.includes(
                                        rowIndex * row.length + charIndex
                                    )}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex w-full flex-row justify-between">
                <div className={` ${currentTime.getMinutes() % 5 ==3 || currentTime.getMinutes() % 5 ==4 ? "text-white" : "text-opacity-0 text-red-600" }`}>
                    ⬤
                </div>
                <div className={` ${currentTime.getMinutes() % 5 == 4 ? "text-white" : "text-opacity-0 text-red-600" }`}>
                    ⬤
                </div>
            </div>
        </div>
    );
};

interface Props {
    char: string;
    highlighted: boolean;
}

function Words(props: Props) {
    return (
        <div
            className={`flex-1 flex justify-center items-center text-center ${
                props.highlighted ? "text-white" : ""
            }`}
        >
            <div className={black_Ops_One.className}>{props.char}</div>
        </div>
    );
}

export default Wordclock;