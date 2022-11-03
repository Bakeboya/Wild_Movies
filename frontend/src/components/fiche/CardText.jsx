import React from "react";
import componentCoeur from "@assets/ComponentCoeur.svg";
import componentLecteur from "@assets/ComponentLecteur.svg";
import pegi12 from "@assets/pegi12.png";
import PropTypes from "prop-types";
import Casting from "./Casting";
import Pegi from "./Pegi";

function CardText({
  releaseDate,
  runtime,
  overview,
  voteAverage,
  genres,
  title,
  cast,
  preview,
  pegi,
}) {
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
    <div className="cardText">
      <div className="titleFilm">
        <h3>
          {title} ({releaseDate && releaseDate.split("-")[0]})
        </h3>
      </div>
      <div className="filtreFilm">
        <div className="pegiFilm">
          <Pegi pegi={pegi} />
        </div>
        <div className="categorieFilm">
          <h4>{genres && genres.map((genre) => <p>{genre.name}</p>)}</h4>
        </div>
        <div className="dureeFilm">
          <h4>
            <p>
              {Math.floor(runtime / 60)}h
              {runtime % 60 < 10 ? `0${runtime % 60}` : runtime % 60}
            </p>
          </h4>
        </div>
      </div>
      <div className="avisFilm">
        <div className="diagramAvis">
          <div className={color(voteAverage)}>
            <span>{Math.floor(voteAverage) * 10}%</span>
          </div>
          <p>Note des Utilisateurs</p>
        </div>
        <img id="logoFavoris" src={componentCoeur} alt="logo favoris" />
        <div className="bande_annonce">
          <a
            href={`https://www.youtube.com/watch?v=${preview[0].key}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              id="logoLecteur"
              src={componentLecteur}
              alt="logo lecteur bande-annonce"
            />
            Bande-annonce
          </a>
        </div>
      </div>
      <div className="synopsisFilm">
        <h3>Synopsis</h3>
        <p>{overview}</p>
      </div>
      <Casting cast={cast} />
    </div>
  );
}
CardText.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  genres: PropTypes.shape(PropTypes.number, PropTypes.string).isRequired,
  cast: PropTypes.shape(PropTypes.string, PropTypes.number).isRequired,
  preview: PropTypes.shape(PropTypes.string, PropTypes.number).isRequired,
  pegi: PropTypes.shape(PropTypes.string, PropTypes.number).isRequired,
};

export default CardText;
