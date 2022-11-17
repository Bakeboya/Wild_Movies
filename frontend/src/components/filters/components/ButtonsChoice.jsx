import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDiscover, useMoviesPopular } from "../../../data/DataFetch";

function ButtonsChoice({ movies, series }) {
  const { type, setType } = useDiscover();

  return (
    <div className="choiceContainer">
      <p>Recherche par filtres</p>
      <div className="typeChoice">
        <Link
          to="/movie"
          onClick={() => setType("movie")}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w300${movies?.[0]?.backdrop_path}), linear-gradient(0deg, #e66d38, #e66d38)`,
          }}
        >
          Films
        </Link>
        <Link
          to="/tv"
          onClick={() => setType("tv")}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w300${series?.[0]?.backdrop_path}), linear-gradient(0deg, #e66d38, #e66d38)`,
          }}
        >
          Séries
        </Link>
      </div>
    </div>
  );
}

export default ButtonsChoice;

ButtonsChoice.propTypes = {
  movies: PropTypes.objectOf(
    PropTypes.shape([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.array,
      PropTypes.number,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.number,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.number,
    ])
  ).isRequired,
  series: PropTypes.objectOf(
    PropTypes.shape([
      PropTypes.string,
      PropTypes.string,
      PropTypes.array,
      PropTypes.number,
      PropTypes.string,
      PropTypes.array,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.number,
      PropTypes.string,
      PropTypes.number,
      PropTypes.number,
    ])
  ).isRequired,
};
