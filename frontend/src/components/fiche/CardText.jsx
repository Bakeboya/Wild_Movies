import React from "react";
import componentCoeur from "@assets/fiche/ComponentCoeur.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FaWindowClose from "@meronex/icons/fa/FaWindowClose";
import Casting from "./Casting";
import Pegi from "./Pegi";
import LecteurBA from "./LecteurBA";
import Time from "./Time";
import VoteAverage from "./VoteAverage";

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
  type,
  numOfEpisodes,
  numOfSeasons,
}) {
  return (
    <div className="cardText">
      <div className="close">
        <Link to="/">
          <FaWindowClose />
        </Link>
      </div>
      <div className="titleFilm">
        {title} ({releaseDate.split("-")[0]})
      </div>
      <div className="filtreFilm">
        <div className="pegiFilm">
          <Pegi pegi={pegi} type={type} />
        </div>
        <div className="separation" />

        {genres &&
          genres.map((genre) => <div className="genreP">{genre.name}</div>)}

        <div className="separation" />
        <div className="dureeFilm">
          <Time
            runtime={runtime}
            type={type}
            numOfEpisodes={numOfEpisodes}
            numOfSeasons={numOfSeasons}
          />
        </div>
      </div>
      <div className="avisFilm">
        <div className="diagramAvis">
          <VoteAverage voteAverage={voteAverage} />
          <p>Note des Utilisateurs</p>
        </div>
        <img id="logoFavoris" src={componentCoeur} alt="logo favoris" />

        <div className="bande_annonce">
          {preview[0] !== undefined ? (
            <LecteurBA preview={preview} title={title} />
          ) : (
            <div>
              <p>La bande annonce n'est pas disponible</p>
            </div>
          )}
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
  type: PropTypes.string.isRequired,
  numOfEpisodes: PropTypes.number.isRequired,
  numOfSeasons: PropTypes.number.isRequired,
};

export default CardText;
