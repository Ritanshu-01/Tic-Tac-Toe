import React from "react";
import Square from "./Square";

function Board({ squares, onClick, winningLine }) {

  function renderSquare(i) {
    const highlight = winningLine ? winningLine.includes(i) : false;
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
        highlight={highlight}
      />
    );
  }

  return (
    <div className="board">
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
