import React from "react";
import Square from "./Square";
type Props = {
    squares: Array<string>;
    finished: boolean;
    onClick: (i: number) => void;
    style?: string;
};
const Board: React.FC<Props> = props => {
    // @ts-ignore
    const renderSquare = (i: number) => (
        <Square value={props.squares[i]} style={props.style} onClick={() => props.onClick(i)} />
    );
    return (
        <div className={` text-white flex justify-center items-center ${props.style === "nightmode" ? "text-nightmode" : ""}`}>
            <div className="">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board;