import React from "react";
import { connect } from "react-redux";

const Results = ({ results }) => {
  const renderedResults = results.map((result, i) => {
    return (
      <li style={{ listStyleType: "none" }} key={i}>
        {result.player1.name} Vs. {result.player2.name} | Winner:{" "}
        {result.winner}
      </li>
    );
  });

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          {renderedResults}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.results);
  return {
    results: state.results,
  };
};
export default connect(mapStateToProps)(Results);
