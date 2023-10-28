"use client"
import React, {useEffect, useState} from 'react';
import Clock from "~/app/_components/MillionClock/Clock";

function MillionClock() {



    const rows = 12;
    const columns = 24;
    const [grid, setGrid] = useState<string[][]>(
        new Array(rows).fill([]).map(() => new Array(columns).fill("─"))
    );

    useEffect(() => {
        const timer = setInterval(() => {
            const hh = new Date().getHours();
            const mm = new Date().getMinutes();
            const newGrid = AutoGrid(hh, mm, grid);
            setGrid(newGrid);
        }, 1000);

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





    function AutoGrid(
        hour: number = 0,
        minute: number = 0,
        grid: string[][]
    ): any  {
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



        // write the number to the grid
        for (let i: number = 3; i <= 8; i++) {
            for (let j: number = 1; j <= 5; j++) {
                if (newGrid[i] !== undefined ) {
                    // @ts-ignore
                    newGrid[i][j] = number[i - 3][0][j - 1];
                }
            }
        }

        for (let i: number = 3; i <= 8; i++) {
            for (let j: number = 11; j <= 12; j++) {
                if (newGrid[i] !== undefined ) {
                    // @ts-ignore
                    newGrid[i][j] = numbers[10][i - 3][0][j - 11];
                }
            }
        }

        for (let i: number = 3; i <=8; i++) {
            for (let j: number = 6; j <= 10; j++) {
                if (newGrid[i] !== undefined ) {
                    // @ts-ignore
                    newGrid[i][j] = number2[i - 3][0][j - 6];
                }
            }
        }

        for (let i: number = 3; i <= 8; i++) {
            for (let j: number = 13; j <= 17; j++) {
                if (newGrid[i] !== undefined ) {
                    // @ts-ignore
                    newGrid[i][j] = number3[i - 3][0][j - 13];
                }
            }
        }

        for (let i: number = 3; i <= 8; i++) {
            for (let j: number = 18; j <= 22; j++) {
                if (newGrid[i] !== undefined ) {
                    // @ts-ignore
                    newGrid[i][j] = number4[i - 3][0][j - 18];
                }
            }
        }


        return newGrid;
    }



    return (
        <div className="flex flex-col bg-white rounded-xl justify-center items-center w-full h-full">
            {grid.map((row, rowIndex: number) => (
                <div className="flex flex-row w-full h-full justify-evenly" key={rowIndex}>
                    {row.map((column, columnIndex: number) => (
                        <div className="flex flex-col justify-center items-center " key={`${rowIndex}-${columnIndex}`}>
                            <Clock input={grid[rowIndex][columnIndex]} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}


export default MillionClock