import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { setNext } from "../action";
import { calculateWinner } from "../helper";
import Board from "./Board";
import MatchStatus from "./MatchStatus.js";
import Players from "./Players";

const Play = ({ players, status }) => {
  const dispatch = useDispatch();
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = status ? players.player1 : players.player2;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    dispatch(setNext(!status));
  };

  return (
    <div className="container py-4">
      <h1>React Tic Tac Toe - With Hooks</h1>
      <hr />
      <Players />
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <MatchStatus  winner={winner} />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    results: state.results,
    players: state.players,
    status: state.status,
  };
};
export default connect(mapStateToProps)(Play);
