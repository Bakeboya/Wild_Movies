import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ButtonsChoice({ movies, series }) {
  const [toggleType, setToggleType] = useState(0);
  const typeButton = (index) => {
    setToggleType(index);
  };

  return (
    <div className="choiceContainer">
      <p>Recherche par filtres</p>
      <div className="typeChoice">
        <button
          className={toggleType === 1 ? "selected" : ""}
          type="button"
          onClick={() => typeButton(1)}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w300${movies?.[0]?.backdrop_path}), linear-gradient(0deg, #e66d38, #e66d38)`,
          }}
        >
          Films
        </button>
        <button
          className={toggleType === 2 ? "selected" : ""}
          type="button"
          onClick={() => typeButton(2)}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w300${series?.[0]?.backdrop_path}), linear-gradient(0deg, #e66d38, #e66d38)`,
          }}
        >
          Séries
        </button>
      </div>
      {toggleType === 1 && (
        <nav>
          <Link
            to="/films/populaires"
            state={{ title: "Films populaires", placeholder: "Popularité ↑" }}
          >
            Populaires
          </Link>
          <Link
            to="/films/meilleures-notes"
            state={{ title: "Films les mieux notés", placeholder: "Notes ↑" }}
          >
            Les mieux notés
          </Link>
          <Link
            to="/films/a-venir"
            state={{ title: "Films à venir", placeholder: "Date de sortie ↑" }}
          >
            A venir
          </Link>
        </nav>
      )}
      {toggleType === 2 && (
        <nav>
          <Link to="/series/populaires">Populaires</Link>
          <Link to="/series/meilleures-notes">Les mieux notées</Link>
          <Link to="/series/en-ce-moment">En cours de diffusion</Link>
        </nav>
      )}
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
