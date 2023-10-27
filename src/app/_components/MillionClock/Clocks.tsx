import React from 'react';
import Clock from "~/app/_components/MillionClock/Clock";

function Clocks() {
    // make a 14 x 36 array
    const grid = [];
    for (let i = 0; i < 14; i++) {
        const row = [];
        for (let j = 0; j < 36; j++) {
            row.push(j);
        }
        grid.push(row);
    }

    return (
        // render a 14 x 36
        <div className="flex flex-col justify-center items-center w-full h-full">
            {/* map the grid */}
            {grid.map((row, rowIndex) => (
                <div className="flex flex-row w-full h-full justify-evenly" key={rowIndex}>
                    {row.map((column, columnIndex) => (
                        <div className="flex flex-col justify-center items-center w-full h-full" key={`${rowIndex}-${columnIndex}`}>
                            <Clock hour={rowIndex} minute={columnIndex} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Clocks;