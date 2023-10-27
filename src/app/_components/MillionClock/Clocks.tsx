import React from 'react';
import Clock from "~/app/_components/MillionClock/Clock";

function Clocks() {
    // make a 14 x 36 array

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
    ];
    let grid: string[][] = [];

    for (let i: number = 0; i < 14; i++) {
        let row: string[] = [];
        for (let j: number = 0; j < 36; j++) {
            row.push(" ");
        }
        grid.push(row);
    }



    function AutoGrid(hour: number = 0, minute: number = 0) {
        const h: number = Math.floor(hour / 10);
        const h2: number = hour % 10;
        const m: number = Math.floor(minute / 10);
        const m2: number = minute % 10;

        // get the number from numbers and write it to the grid
        const number: string[][] = numbers[h] as string [][];
        const number2: string[][] = numbers[h2] as string [][];
        const number3: string[][] = numbers[m] as string [][];
        const number4: string[][] = numbers[m2] as string [][];

        // write the number to the grid
        for (let i: number = 9; i <= 12; i++) {
            for (let j: number = 3; j <= 10; j++) {
                // @ts-ignore
                grid[i][j]  = number[i - 9][j - 3] ;
            }
        }

        for (let i: number = 13; i <= 16; i++) {
            for (let j: number = 3; j <= 10; j++) {
                grid[i][j] = number2[i - 13][j - 3];
            }
        }

        for (let i: number = 19; i <= 22; i++) {
            for (let j: number = 3; j <= 10; j++) {
                grid[i][j] = number3[i - 19][j - 3];
            }
        }

        for (let i: number = 23; i <= 26; i++) {
            for (let j: number = 3; j <= 10; j++) {
                grid[i][j] = number4[i - 23][j - 3];
            }
        }
    }

    AutoGrid(12, 4);


    return (
        // render a 14 x 36
        <div className="flex flex-col justify-center items-center w-full h-full">
            {grid.map((row , rowIndex: number) => (
                <div className="flex flex-row w-full h-full justify-evenly" key={rowIndex}>
                    {row.map((column, columnIndex: number) => (
                        <div className="flex flex-col justify-center items-center w-full h-full" key={`${rowIndex}-${columnIndex}`}>
                            <Clock input={grid[rowIndex][columnIndex]} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Clocks;