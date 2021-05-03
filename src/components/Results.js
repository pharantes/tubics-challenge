import React from "react";
import { connect } from "react-redux";

const Results = ({ results }) => {
  const renderedResults = () => {
    results.map((result) => {
      console.log(result);
      return (
        <li>
          {result.players.player1.name} Vs. {result.players.player2.name} |
          Winner: {result.winner}
        </li>
      );
    });
  };
  return <div>{renderedResults}</div>;
};

const mapStateToProps = (state) => {
  return {
    results: state.results,
  };
};
export default connect(mapStateToProps)(Results);
