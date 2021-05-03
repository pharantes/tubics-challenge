import React, { useState } from "react";
import Board from "./Board";
import { connect, useDispatch } from "react-redux";
import { createMatch } from "../action.js";
import { calculateWinner } from "../helper";

const Play = ({ results }) => {
  const [players, setPlayers] = useState({
    player1: { name: "player1", symbol: "X" },
    player2: { name: "player2", symbol: "O" },
  });
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? players.player1 : players.player2;
  const dispatch = useDispatch();;
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
  const saveMatch = (winner) => {
    console.log(winner)
    dispatch(createMatch(players, winner))
  }

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
          <div className="row justify-content-around align-items-center">
            Winner: {winner}
            <button
              onClick={() => saveMatch(winner)}
              className="btn btn-primary"
            >
              Save &amp; Start new
            </button>
            <button className="btn btn-primary">Results</button>
          </div>
        ) : (
          <p>Next Player: {xO.name}</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return { results: state.results };
};
export default connect(mapStateToProps)(Play);
