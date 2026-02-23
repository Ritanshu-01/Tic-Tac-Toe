import React, { useState } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = isXTurn ? "X" : "O";

    setSquares(newSquares);
    setIsXTurn(!isXTurn);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
  }

  const winner = calculateWinner(squares);
  const winningLine = getWinningLine(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${isXTurn ? "X" : "O"}`;

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{status}</h2>

      <Board
        squares={squares}
        onClick={handleClick}
        winningLine={winningLine}
      />

      <button onClick={resetGame} className="reset-btn">
        Restart Game
      </button>
    </div>
  );
}

function getWinningLine(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
  ];

  for (let line of lines) {
    const [a,b,c] = line;
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return line;
    }
  }
  return null;
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
  ];

  for (let line of lines) {
    const [a,b,c] = line;
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
}

export default App;
