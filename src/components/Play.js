import React, { useState } from "react";
import Board from "./Board";
import Winner from "./Winner";
import { calculateWinner } from "../helper";

const Play = () => {
  const [players, setPlayers] = useState({
    player1: { name: "player1", symbol: "X" },
    player2: { name: "player2", symbol: "O" },
  });
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? players.player1 : players.player2;

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  return (
    <div className="container py-4">
      <h1>React Tic Tac Toe - With Hooks</h1>
      <div className="row">
        <div className="col">
          <label className="form-label" htmlFor="player1">
            Player 1 name:
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="player 1"
            id="player1"
            onChange={(event) =>
              setPlayers({
                ...players,
                player1: { name: event.target.value, symbol: "X" },
              })
            }
          />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="player1">
            Player 2 name:
          </label>
          <input
            className="form-control"
            type="text"
            id="player2"
            placeholder="player 2"
            onChange={(event) =>
              setPlayers({
                ...players,
                player2: { name: event.target.value, symbol: "O" },
              })
            }
          />
        </div>
      </div>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div>
        {winner ? (
          <Winner winner={winner} players={players} />
        ) : (
          <p>Next Player: {xO.name}</p>
        )}
      </div>
    </div>
  );
};
export default Play;
