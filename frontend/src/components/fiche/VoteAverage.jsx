import React from "react";
import PropTypes from "prop-types";

function VoteAverage({ voteAverage }) {
  const color = (donnee) => {
    if (donnee < 5) {
      return "diagram_note nul";
    }
    if (donnee >= 5 && donnee < 7.5) {
      return "diagram_note bof";
    }
    return "diagram_note good";
  };

  return (
    <div className={color(voteAverage)}>
      <span>{Math.round(voteAverage * 10) / 10}</span>
    </div>
  );
}

VoteAverage.propTypes = {
  voteAverage: PropTypes.number.isRequired,
};

export default VoteAverage;
