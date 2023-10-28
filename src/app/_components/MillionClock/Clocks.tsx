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


    console.log(numbers[0][5][0][4])
    const rows = 12;
    const columns = 24;
    let grid: string[][] = new Array(rows).fill([]).map(() => new Array(columns).fill('│'));



    function AutoGrid(hour: number = 0, minute: number = 0) {
        const h: number = Math.floor(hour / 10);
        const h2: number = hour % 10;
        const m: number = Math.floor(minute / 10);
        const m2: number = minute % 10;

        // get the number from numbers and write it to the grid
        const number: string[][] = numbers[h] as string[][];
        const number2: string[][] = numbers[h2] as string[][];
        const number3: string[][] = numbers[m] as string[][];
        const number4: string[][] = numbers[m2] as string[][];



        // write the number to the grid
        for (let i: number = 3; i <= 8; i++) {
            for (let j: number = 1; j <= 5; j++) {
                if (grid[i] !== undefined && grid[i][j] !== undefined) {
                    // @ts-ignore
                    grid[i][j] = number[i - 3][0][j - 1];
                    //console.log("i:"+ i + "j" + j + "num" +number[i - 9][0][j - 3])
                   // console.log("i: " + i+ "j" + j)
                    //console.log(grid[i][j])


                }
            }
        }

        for (let i: number = 13; i <= 16; i++) {
            for (let j: number = 3; j <= 10; j++) {
                if (grid[i] !== undefined && grid[i][j] !== undefined) {
                    // @ts-ignore
                    grid[i][j] = number2[i - 13][0][j - 3];
                }
            }
        }

        for (let i: number = 19; i <= 22; i++) {
            for (let j: number = 3; j <= 10; j++) {
                if (grid[i] !== undefined && grid[i][j] !== undefined) {
                    // @ts-ignore
                    grid[i][j] = number3[i - 19][0][j - 3];
                }
            }
        }

        for (let i: number = 23; i <= 26; i++) {
            for (let j: number = 3; j <= 10; j++) {
                if (grid[i] !== undefined && grid[i][j] !== undefined) {
                    // @ts-ignore
                    grid[i][j] = number4[i - 23][0][j - 3];
                }
            }
        }
        for (let i: number = 0; i < 14; i++) {
            for (let j: number = 0; j < 36; j++) {
                //console.log(grid[i][j])
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