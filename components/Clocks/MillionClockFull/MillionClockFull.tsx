"use client"

import React, { useEffect, useState } from 'react';
import SingleClockFull from "./SingleClockFull";

//eslint and ts ignore whole file

// @ts-ignore
// eslint-disable-whole-file
interface Props {
    style?: string;
}

function MillionClockFull(props: Props) {
    const rows = 12;
    const columns = 24;
    const [grid, setGrid] = useState<string[][]>(
        new Array(rows).fill([]).map(() => new Array(columns).fill("─"))
    );

    const [waveGrid, setWaveGrid] = useState<number[][][]>(
        new Array(rows).fill([]).map(() => new Array(columns).fill([90,270]))
    );

    useEffect(() => {
        const timer = setInterval(() => {
            const hh = new Date().getMinutes();
            const mm = new Date().getSeconds();
            const newGrid = AutoGrid(hh, mm, grid);


            const newWaveGrid = setWave(waveGrid);
            setWaveGrid(newWaveGrid);
            // @ts-ignore


        }, 100);

        return () => clearInterval(timer);
    }, [grid]);



    const numbers: string[][][] = [
        [["┌───┐"],
            ["│┌─┐│"],
            ["││─││"],
            ["││─││"],
            ["│└─┘│"],
            ["└───┘"]],

        [["┌──┐─"],
            ["└─┐│─"],
            ["──││─"],
            ["──││─"],
            ["┌─┘└┐"],
            ["└───┘"]],

        [["┌───┐"],
            ["└──┐│"],
            ["┌──┘│"],
            ["│┌──┘"],
            ["│└──┐"],
            ["└───┘"]],

        [["┌───┐"],
            ["└──┐│"],
            ["┌──┘│"],
            ["└──┐│"],
            ["┌──┘│"],
            ["└───┘"]],

        [["┌┐─┌┐"],
            ["││─││"],
            ["│└─┘│"],
            ["└──┐│"],
            ["───││"],
            ["───└┘"]],

        [["┌───┐"],
            ["│┌──┘"],
            ["│└──┐"],
            ["└──┐│"],
            ["┌──┘│"],
            ["└───┘"]],

        [["┌───┐"],
            ["│┌──┘"],
            ["│└──┐"],
            ["│┌─┐│"],
            ["│└─┘│"],
            ["└───┘"]],

        [["┌───┐"],
            ["└──┐│"],
            ["───││"],
            ["───││"],
            ["───││"],
            ["───└┘"]],

        [["┌───┐"],
            ["│┌─┐│"],
            ["│└─┘│"],
            ["│┌─┐│"],
            ["│└─┘│"],
            ["└───┘"]],

        [["┌───┐"],
            ["│┌─┐│"],
            ["│└─┘│"],
            ["└──┐│"],
            ["┌──┘│"],
            ["└───┘"]],

        [["──"],
            ["┌┐"],
            ["└┘"],
            ["┌┐"],
            ["└┘"],
            ["──"]],
    ];

    function setWave(grid: number[][][]) {
        let newGrid = JSON.parse(JSON.stringify(grid));
        let now = new Date();

        setInterval(() => {
            let waveDegree = (now.getSeconds() / 60) * 360;

            for (let i: number = 0; i < rows; i++) {
                for (let j: number = 0; j < columns; j++) {
                    // set the minute and hour degree to a sine wave
                    const waveValue = Math.round(Math.sin(j / 5 * 2 * Math.PI + waveDegree) * 2);
                    newGrid[i][j][0] = waveValue * 10;
                    newGrid[i][j][1] = waveValue * 10;
                }
            }
        }, 10);

        return newGrid;
    }

    function AutoGrid(
        hour = 0,
        minute = 0,
        grid: string[][]
    ): string[][] {
        const h: number = Math.floor(hour / 10);
        const h2: number = hour % 10;
        const m: number = Math.floor(minute / 10);
        const m2: number = minute % 10;

        // get the number from numbers and write it to the grid
        const number: string[][] = numbers[h] as string[][];
        const number2: string[][] = numbers[h2] as string[][];
        const number3: string[][] = numbers[m] as string[][];
        const number4: string[][] = numbers[m2] as string[][];

        // create a new grid with the updated values
        const newGrid: string[][] = [...grid];

        for (let i: number = 3; i <= 8; i++) {
            for (let j: number = 1; j <= 5; j++) {
                if (newGrid[i] !== undefined) {
                    // @ts-ignore
                    newGrid[i][j] = number[i - 3][0][j - 1];
                }
            }
        }

        for (let i: number = 3; i <= 8; i++) {
            for (let j: number = 11; j <= 12; j++) {
                if (newGrid[i] !== undefined) {
                    // @ts-ignore
                    newGrid[i][j] = numbers[10][i - 3][0][j - 11];
                }
            }
        }

        for (let i: number = 3; i <= 8; i++) {
            for (let j: number = 6; j <= 10; j++) {
                if (newGrid[i] !== undefined) {
                    // @ts-ignore
                    newGrid[i][j] = number2[i - 3][0][j - 6];
                }
            }
        }

        for (let i: number = 3; i <= 8; i++) {
            for (let j: number = 13; j <= 17; j++) {
                if (newGrid[i] !== undefined) {
                    // @ts-ignore
                    newGrid[i][j] = number3[i - 3][0][j - 13];
                }
            }
        }

        for (let i: number = 3; i <= 8; i++) {
            for (let j: number = 18; j <= 22; j++) {
                if (newGrid[i] !== undefined) {
                    // @ts-ignore
                    newGrid[i][j] = number4[i - 3][0][j - 18];
                }
            }
        }

        return newGrid;
    }

    // @ts-ignore
    return (
        <div className="flex flex-col w-screen h-screen  p-10 rounded-xl justify-center items-center">
            {grid.map((row, rowIndex: number) => (
                <div className="flex flex-row w-full h-full  justify-evenly" key={rowIndex}>
                    {row.map((column, columnIndex: number) => (
                        <div className="flex flex-col w-full h-full  justify-center items-center " key={`${rowIndex}-${columnIndex}`}>
                            <SingleClockFull
                                input={grid?.[rowIndex]?.[columnIndex]  }
                                minutedegree={waveGrid?.[rowIndex]?.[columnIndex]?.[0] ?? 0}
                                hourdegree={waveGrid?.[rowIndex]?.[columnIndex]?.[1] ?? 0}
                                mavemode={false}
                                style={props.style}
                            />                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default MillionClockFull;