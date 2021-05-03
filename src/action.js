export const saveMatch = ({ player1, player2 }, winner) => {
  return {
    type: "SAVE_MATCH",
    payload: {
      player1,
      player2,
      winner,
    },
  };
};

export const createPlayers = ({ player1, player2 }) => {
  return {
    type: "CREATE_PLAYERS",
    payload: {
      player1,
      player2,
    },
  };
};

export const setNext = (status) => {
  return { type: "SET_NEXT", payload: status };
};

export const setStepNumber = (stepNumber) => {
  return { type: "SET_STEP_NUMBER", payload: stepNumber };
};

export const setBoardHistory = (boardHistory) => {
  return {
    type: "SET_BOARD_HISTORY",
    payload: boardHistory,
  };
};

export const getWinner = (winner) => {
  return {
    type: "GET_WINNER",
    payload: winner,
  };
};
