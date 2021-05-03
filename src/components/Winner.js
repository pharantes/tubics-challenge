import React from "react";

const Winner = ({ winner, players }) => {
  return (
    <div className="row d-flex w-100 justify-content-around align-items-center">
      <p className="my-2">Winner: {winner}</p>
      <button>Save & Start new match</button>
      <button>Results</button>
    </div>
  );
};

export default Winner;
