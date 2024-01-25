import React from "react";
import Square from "./Square";

type Props = {
  squares: Array<string>;
  finished: boolean;
  onClick: (i: number) => void;
  style?: string;
};
const Board: React.FC<Props> = (props) => {
  const renderSquare = (i: number) => (
    <Square
      style={props.style}
      value={props.squares[i]}
      onClick={() => props.onClick(i)}
    />
  );
  return (
    <div className={" flex items-center justify-center text-white "}>
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
