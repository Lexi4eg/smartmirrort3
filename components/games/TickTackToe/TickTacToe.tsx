"use client"
import React, {useState} from 'react';
import Board from "./Board";

interface Props {
    style?: string;
}

const TickTackToe = (props: Props) => {
    const [history, setHistory] = useState([{ squares: new Array(9) }]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [finished, setFinished] = useState(false);


    function restart() {
        setHistory([{ squares: new Array(9) }]);
        setStepNumber(0);
        setXIsNext(true);
        setFinished(false);
    }
    const handleClick = (i: number) => {
        if (finished) {
            return;
        }
        if (stepNumber >= 9) {
            setFinished(true);
            return;
        }
        const _history = history.slice(0, stepNumber + 1);
        // @ts-ignore
        const squares = [..._history[_history.length - 1].squares];
        console.log("history:", _history.length, stepNumber);
        if (squares[i]) {
            return;
        }
        const winner = calculateWinner(squares);
        if (winner) {
            setFinished(true);
            return;
        }
        squares[i] = xIsNext ? "X" : "O";
        setHistory([..._history, { squares }]);
        setStepNumber(_history.length);
        setXIsNext(!xIsNext);
    };
    const jumpTo = (step: number) => {
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
        setFinished(false);
    };
    const _history = [...history];
    // @ts-ignore
    const squares = [..._history[stepNumber].squares];
    const winner = calculateWinner(squares);
    const status = winner
        ? "Winner: " + winner
        : "Next player: " + (xIsNext ? "X" : "O");

    return (
        <div className="">
            <Board
                squares={squares}
                style={props.style}
                finished={finished}
                onClick={i => handleClick(i)}
            />
            <div className={`text-center p-10 ${props.style === "nightmode" ? "text-nightmode" : ""}`}>
                <div>{status}</div>
               <button onClick={() => restart ()}>Restart</button>
            </div>
        </div>
    );
}
function calculateWinner(squares: Array<string>) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const length = lines.length;
    for (let i = 0; i < length; i++) {
        // @ts-ignore
        const [a, b, c] = lines[i];
        const player = squares[a];
        if (player && player === squares[b] && player === squares[c]) {
            return player;
        }
    }
    return null;
}

export default TickTackToe;