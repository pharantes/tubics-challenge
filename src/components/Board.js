import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  return (
    <div className="board container my-5">
      {squares.map((square, i) => {
        return (
          <Square
            key={i}
            value={!square ? null : square.symbol}
            onClick={() => onClick(i)}
          />
        );
      })}
    </div>
  );
};

export default Board;
