import React from "react";
import PropTypes from "prop-types";

function Time({ runtime, type, numOfEpisodes, numOfSeasons }) {
  const getTime = (time) => {
    const hour = Math.floor(time / 60);
    const min = time % 60 < 10 ? `0${time % 60}` : `${time % 60}`;
    return `${hour}h${min}`;
  };

  const getNumofepi = (epi, sea) => {
    if (sea === 1) {
      return `${sea} saison (${epi} épisodes)`;
    }
    return `${sea} saisons (${epi} épisodes)`;
  };

  return (
    <div className="time">
      {type === "movie" ? (
        <p>{getTime(runtime)}</p>
      ) : (
        <p>{getNumofepi(numOfEpisodes, numOfSeasons)}</p>
      )}
    </div>
  );
}

Time.propTypes = {
  runtime: PropTypes.number.isRequired,
  numOfEpisodes: PropTypes.number.isRequired,
  numOfSeasons: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default Time;
