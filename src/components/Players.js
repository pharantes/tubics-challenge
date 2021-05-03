import React from "react";
import { connect, useDispatch } from "react-redux";
import { createPlayers } from "../action.js";

const Players = ({ players }) => {
  const dispatch = useDispatch();

  return (
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
            dispatch(
              createPlayers({
                ...players,
                player1: { name: event.target.value, symbol: "X" },
              })
            )
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
            dispatch(
              createPlayers({
                ...players,
                player2: { name: event.target.value, symbol: "O" },
              })
            )
          }
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { players: state.players };
};
export default connect(mapStateToProps)(Players);
