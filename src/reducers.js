import { combineReducers } from "redux";

const resultReducer = (results = [], action) => {
  if (action.type === "CREATE_MATCH") {
    return action.payload;
  }
  return results;
};

const playersReducer = (
  players = {
    player1: { name: "player1", symbol: "X" },
    player2: { name: "player2", symbol: "O" },
  },
  action
) => {
  if (action.type === "CREATE_PLAYERS") {
    return action.payload;
  }
  return players;
};

const matchStatusReducer = (status = true, action) => {
  if (action.type === "SET_NEXT") {
    return action.payload;
  }
  return status;
};

export default combineReducers({
  results: resultReducer,
  players: playersReducer,
  status: matchStatusReducer,
});
