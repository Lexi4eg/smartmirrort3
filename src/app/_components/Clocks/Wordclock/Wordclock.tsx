"use client";
import { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import {compileNonPath} from "next/dist/shared/lib/router/utils/prepare-destination";

const black_Ops_One = Roboto({
    weight: "100",
    variable: "--font-inter",
    subsets: ["latin"],
});


interface Props {
    time : number;
    style?: string;
}

const Wordclock = (props: Props) => {
    const [currentTime, setCurrentTime] = useState(new Date(props.time));
    const [timestring, setTimestring] = useState<string>("");
    const [highlightedIndexes, setHighlightedIndexes] = useState<number[]>([]);
    function timeString(h: number, m: number, settings = { round: false }) {
        let ret = "ES IST ";
        h %= 12;
        if (h == 0) h = 12;
        let hourNames = [
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
                ret += (h == 1 ? "EIN UHR" : hourNames[h - 1]);
                break;
            case 5:
                ret += "FÜNF NACH " + hourNames[h - 1];
                break;
            case 10:
                ret += "ZEHN NACH " + hourNames[h - 1];
                break;
            case 15:
                ret += "VIERTEL NACH " + hourNames[h - 1];
                break;
            case 20:
                ret += "ZWANZIG NACH " + hourNames[h - 1];
                break;
            case 25:
                ret += "FÜNF VOR HALB " + hourNames[h % 12];
                break;
            case 30:
                ret += "HALB " + hourNames[h % 12];
                break;
            case 35:
                ret += "FÜNF NACH HALB " + hourNames[h % 12];
                break;
            case 40:
                ret += "ZWANZIG VOR " + hourNames[h % 12];
                break;
            case 45:
                ret += "VIERTEL VOR " + hourNames[h % 12];
                break;
            case 50:
                ret += "ZEHN VOR " + hourNames[h % 12];
                break;
            case 55:
                ret += "FÜNF VOR " + hourNames[h % 12];
                break;


        }

        setTimestring(ret);

        return ret;
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());

        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setTimestring(timeString(currentTime.getHours(), currentTime.getMinutes()));
    }, [currentTime]);



    useEffect(() => {
        let x = 0;
        let highlighted = [];
        let lastHighlightedIndex = -1;

        let words = timestring.split(" ");

        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            // @ts-ignore
            let wordLength = word.length;
            let highlightedWord = false;

            for (let j = 0; j < clock.length; j++) {
                let k = 0;
                // @ts-ignore
                while (k < clock[j].length) {
                    // @ts-ignore
                    let index = clock[j].indexOf(word[0], k);
                    // @ts-ignore
                    if (index === -1 || index + wordLength > clock[j].length) {
                        break;
                    }
                    let flag = false;
                    for (let p = 0; p < wordLength; p++) {
                        // @ts-ignore
                        if (clock[j][index + p] !== word[p]) {
                            flag = true;
                            break;
                        }
                    }
                    // @ts-ignore
                    if (!flag && !highlightedWord && (lastHighlightedIndex === -1 || j * clock[j].length + index > lastHighlightedIndex)) {
                        for (let l = 0; l < wordLength; l++) {
                            // @ts-ignore
                            highlighted.push(j * clock[j].length + index + l);
                        }
                        highlightedWord = true;
                        // @ts-ignore
                        lastHighlightedIndex = j * clock[j].length + index + wordLength - 1;
                        k = index + wordLength;
                    } else {
                        k = index + 1;
                    }
                }
            }

            x++;
        }

        setHighlightedIndexes(highlighted);
    }, [timestring]);

    const clock = [
        ["E", "S", "M", "I", "S", "T", "E", "F", "Ü", "N", "F"],
        ["Z", "E", "H", "N", "Z", "W", "A", "N", "Z", "I", "G"],
        ["V", "I", "E", "R", "T", "E", "L", "X", "V", "O", "R"],
        ["N", "A", "C", "H", "V", "X", "R", "H", "A", "L", "B"],
        ["E", "I", "N", "S", "I", "N", "K", "Z", "W", "E", "I"],
        ["D", "R", "E", "I", "E", "A", "N", "V", "I", "E", "R"],
        ["F", "Ü", "N", "F", "N", "I", "S", "E", "C", "H", "S"],
        ["S", "I", "E", "B", "E", "N", "I", "A", "C", "H", "T"],
        ["N", "E", "U", "N", "Z", "E", "H", "N", "E", "L", "F"],
        ["Z", "W", "Ö", "L", "F", "K", "A", "B", "U", "H", "R"],
    ];

    return (
        <div className={"w-full h-full flex flex-col items-center  justify-center p-3"}>
            <div className="flex w-full flex-row justify-between text-md">
                <div className={`  ${currentTime.getMinutes() % 5 == 1 || currentTime.getMinutes() % 5 == 2|| currentTime.getMinutes() % 5 ==3 || currentTime.getMinutes() % 5 == 4 ? "" : "text-opacity-0"} ${props.style === "nightmode" ? "text-nightmode" : "text-white"}`}>
                    ⬤
                </div>
                <div className={`  ${currentTime.getMinutes() % 5 == 2|| currentTime.getMinutes() % 5 ==3 || currentTime.getMinutes() % 5 == 4 ? "" : "text-opacity-0"} ${props.style === "nightmode" ? "text-nightmode" : "text-white"}`}>
                    ⬤
                </div>
            </div>



            <div className={`w-full h-full px-5 justify-center  items-center flex-col ${props.style === "nightmode" ? "text-red-950" : "text-slate-700"}`}>
                <div className={"flex flex-col h-full justify-evenly"}>
                    {clock.map((row, rowIndex) => (
                        <div className={"flex flex-row justify-evenly"} key={rowIndex}>
                            {row.map((char, charIndex) => (
                                <Words
                                    key={charIndex}
                                    char={char}
                                    style={props.style}
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
                <div className={` ${currentTime.getMinutes() % 5 == 3 || currentTime.getMinutes() % 5 == 4 ? "" : "text-opacity-0"} ${props.style === "nightmode" ? "text-nightmode" : "text-white"}`}>
                    ⬤
                </div>
                <div className={` ${currentTime.getMinutes() % 5 == 4 ? "" : "text-opacity-0"} ${props.style === "nightmode" ? "text-nightmode" : "text-white"}`}>
                    ⬤
                </div>
            </div>
        </div>
    );
};

interface WordProps {
    char: string;
    highlighted: boolean;
    style?: string;
}

function Words(props: WordProps) {

    return (
        <div
            className={`flex-1 flex justify-center items-center text-center ${
                props.highlighted && props.style === "nightmode" ? "text-nightmode text-xl font-extrabold" : ""
            } ${
                props.highlighted && props.style !== "nightmode" ? "text-white" : ""
                } ${
                !props.highlighted && props.style === "nightmode" ? "text-red-950" : ""
            }  ${
                !props.highlighted && props.style !== "nightmode" ? "text-slate-700" : ""
            } `
            }
        >
            <div className={black_Ops_One.className}>{props.char}</div>
        </div>
    );
}

export default Wordclock;