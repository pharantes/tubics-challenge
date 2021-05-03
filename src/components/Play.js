import React from "react";
import { connect, useDispatch } from "react-redux";
import { setBoardHistory, setNext, setStepNumber } from "../action";
import { calculateWinner } from "../helper";
import Board from "./Board";
import MatchStatus from "./MatchStatus.js";
import Players from "./Players";

const Play = ({ players, status, stepNumber, boardHistory }) => {
  const dispatch = useDispatch();
  const winner = calculateWinner(boardHistory[stepNumber]);
  const handleClick = (i) => {
    const historyPoint = boardHistory.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = status ? players.player1 : players.player2;
    dispatch(setBoardHistory([...historyPoint, squares]));
    dispatch(setStepNumber(historyPoint.length));
    dispatch(setNext(!status));
  };

  return (
    <div className="container py-4">
      <h1>React Tic Tac Toe - With Hooks</h1>
      <hr />
      <Players />
      <Board squares={boardHistory[stepNumber]} onClick={handleClick} />
      <MatchStatus winner={winner} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    players: state.players,
    status: state.status,
    stepNumber: state.stepNumber,
    boardHistory: state.boardHistory,
  };
};
export default connect(mapStateToProps)(Play);
