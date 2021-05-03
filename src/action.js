export const createMatch = ({ player1, player2 }, winner) => {
  return {
    type: "CREATE_MATCH",
    payload: {
      player1,
      player2,
      winner,
    },
  };
};
