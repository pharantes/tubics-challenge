import React from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { saveMatch, setStepNumber, setNext } from "../action";

const MatchStatus = ({ players, winner, status, results }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const saveCurrentMatch = (winner) => {
    dispatch(saveMatch(players, winner));
    dispatch(setStepNumber(0));
  };
  const clearBoard = () => {
    dispatch(setStepNumber(0));
    dispatch(setNext(true));
  };
  const Redirect = () => {
    dispatch(saveMatch(players, winner));
    history.push("/results");
  };
  return (
    <div>
      {winner ? (
        <div className="row justify-content-around align-items-center">
          Winner: {winner}
          <button
            onClick={() => saveCurrentMatch(winner)}
            className="btn btn-primary"
          >
            Save &amp; Start new
          </button>
          <button onClick={Redirect} className="btn btn-primary">
            Results
          </button>
        </div>
      ) : (
        <div>
          <p>
            Next Player: {status ? players.player1.name : players.player2.name}
          </p>
          <button onClick={clearBoard} className="btn btn-primary">
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    results: state.results,
    players: state.players,
    status: state.status,
    boardHistory: state.boardHistory,
  };
};
export default connect(mapStateToProps)(MatchStatus);
