import React from "react";
import { connect, useDispatch } from "react-redux";
import { saveMatch } from "../action";

const MatchStatus = ({ players, winner, status }) => {
  const dispatch = useDispatch();

  const saveCurrentMatch = (winner) => {
    dispatch(saveMatch(players, winner));
    window.location.reload(false);
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
          <button className="btn btn-primary">Results</button>
        </div>
      ) : (
        <p>
          Next Player: {status ? players.player1.name : players.player2.name}
        </p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    players: state.players,
    status: state.status,
    boardHistory: state.boardHistory,
  };
};
export default connect(mapStateToProps)(MatchStatus);
