"use client"
import { useEffect, useState } from "react";
import { Roboto } from "next/font/google";

const black_Ops_One = Roboto({
    weight: "100",
    variable: "--font-inter",
    subsets: ["latin"],
});

const Wordclock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [highlightedIndexes, setHighlightedIndexes] = useState<number[]>([]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();

        const indexes: number[] = [];

        // Map the current time to the appropriate indexes in the clock array
        if (hours === 0 || hours === 12) {
            indexes.push(9, 10);
        } else if (hours === 1 || hours === 13) {
            indexes.push(5, 6, 10);
        } else if (hours === 2 || hours === 14) {
            indexes.push(0, 1, 2, 3);
        } else if (hours === 3 || hours === 15) {
            indexes.push(2, 3, 4, 5);
        } else if (hours === 4 || hours === 16) {
            indexes.push(1, 2, 3, 4);
        } else if (hours === 5 || hours === 17) {
            indexes.push(0, 1, 2, 3, 4);
        } else if (hours === 6 || hours === 18) {
            indexes.push(0, 1, 2, 3, 4, 5);
        } else if (hours === 7 || hours === 19) {
            indexes.push(0, 1, 2, 3, 4, 5, 6);
        } else if (hours === 8 || hours === 20) {
            indexes.push(0, 1, 2, 3, 4, 5, 6, 7);
        } else if (hours === 9 || hours === 21) {
            indexes.push(0, 1, 2, 3, 4, 5, 6, 7, 8);
        } else if (hours === 10 || hours === 22) {
            indexes.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
        } else if (hours === 11 || hours === 23) {
            indexes.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        }

        if (minutes >= 5 && minutes < 10) {
            indexes.push(1, 0);
        } else if (minutes >= 10 && minutes < 15) {
            indexes.push(3, 2, 1);
        } else if (minutes >= 15 && minutes < 20) {
            indexes.push(4, 3, 2, 1);
        } else if (minutes >= 20 && minutes < 25) {
            indexes.push(6, 5, 4, 3);
        } else if (minutes >= 25 && minutes < 30) {
            indexes.push(7, 6, 5, 4, 3);
        } else if (minutes >= 30 && minutes < 35) {
            indexes.push(9, 8, 7, 6, 5);
        } else if (minutes >= 35 && minutes < 40) {
            indexes.push(10, 9, 8, 7, 6, 5);
        } else if (minutes >= 40 && minutes < 45) {
            indexes.push(8, 7, 6, 5, 4);
        } else if (minutes >= 45 && minutes < 50) {
            indexes.push(5, 4, 3, 2);
        } else if (minutes >= 50 && minutes < 55) {
            indexes.push(3, 2, 1);
        } else if (minutes >= 55) {
            indexes.push(1, 0);
        }

        setHighlightedIndexes(indexes);
    }, [currentTime]);

    const clock = [
        ["E", "S", "K", "I", "S", "T", "A", "F", "Ü", "N", "F"],
        ["Z", "E", "H", "N", "Z", "W", "A", "N", "Z", "I", "G"],
        ["D", "R", "E", "I", "V", "I", "E", "R", "T", "E", "L"],
        ["V", "O", "R", "F", "U", "N", "K", "N", "A", "C", "H"],
        ["H", "A", "L", "B", "A", "E", "L", "F", "Ü", "N", "F"],
        ["E", "I", "N", "S", "X", "A", "M", "Z", "W", "E", "I"],
        ["D", "R", "E", "I", "P", "M", "J", "V", "I", "E", "R"],
        ["S", "E", "C", "H", "S", "N", "L", "A", "C", "H", "T"],
        ["S", "I", "E", "B", "E", "N", "Z", "W", "Ö", "L", "F"],
        ["Z", "E", "H", "N", "E", "U", "N", "K", "U", "H", "R"],
    ];

    return (
        <div className={"w-full h-full justify-center items-center flex-col"}>
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
                props.highlighted ? "bg-yellow-300" : ""
            }`}
        >
            <div className={black_Ops_One.className}>{props.char}</div>
        </div>
    );
}

export default Wordclock;