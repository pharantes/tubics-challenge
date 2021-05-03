import { combineReducers } from "redux";

const resultReducer = (results = [], action) => {
  if (action.type === "SAVE_MATCH") {
    return [...results, action.payload];
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
const stepNumberReducer = (stepNumber = 0, action) => {
  if (action.type === "SET_STEP_NUMBER") {
    return action.payload;
  }
  return stepNumber;
};

const boardHistoryReducer = (boardHistory = [Array(9).fill(null)], action) => {
  if (action.type === "SET_BOARD_HISTORY") {
    return action.payload;
  } else if (action.type === "CLEAR_BOARD") {
    return action.payload;
  }
  return boardHistory;
};

export default combineReducers({
  results: resultReducer,
  players: playersReducer,
  status: matchStatusReducer,
  stepNumber: stepNumberReducer,
  boardHistory: boardHistoryReducer,
});
