"use client"
import React, { useState } from 'react';


interface Props {
    style?: string;
}
const TickTackToe = (props: Props) => {
    const [board, setBoard] = useState( Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function calculateWinner(board: string[][]) {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                return board[i][0];
            }
        }

        // Check columns
        for (let i = 0; i < 3; i++) {
            if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
                return board[0][i];
            }
        }

        // Check diagonals
        if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            return board[0][0];
        }
        if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            return board[0][2];
        }

        return null;
    }

    const winner = calculateWinner(board);

    function handleClick(index: number) {
        if (winner || board[index]) return;
        const newBoard = board.slice();
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    }

    function renderSquare(index: number) {
        return <button className={` ${props.style =="nightmode" ? "text-nightmode" : "text-white"}`} onClick={() => handleClick(index)}>{board[index]}</button>;
    }

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <div>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <div>
                {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}
            </div>
        </div>
    );
};

export default TickTackToe;