import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ContentCard({ c }) {

  const [type, setType] = useState(c.title === undefined ? "tv" : "movie");
  const imgPath = `https://image.tmdb.org/t/p/w200${c.poster_path}`;
  const profilePath = `https://image.tmdb.org/t/p/w185${c.profile_path}`;
  const emptyPath = "https://placeholder.pics/svg/175x262.5/FFFFFF/FFFFFF/No%20picture%20found";

  const moviePath = `/${type}/${c.id}`;
  const actorPath = `/actor/${c.id}`;
  const directorPath = `/crew/${c.id}`;

  const imgCover = () => {
    if (c.poster_path) {
      return imgPath
    } else if (c.profile_path) {
      return profilePath
    } else {
      return emptyPath
    }
  }

  const linkPath = () => {
    if (c.poster_path) {
      return moviePath
    } else if (c.known_for_department === "Acting") {
      return actorPath
    } else if (c.known_for_department !== "Acting") {
      return directorPath
    }
  }

  return (
    <li>
      <Link
        to={linkPath()}
        className="imgPoster"
        title={c.title || c.name}
      >
        <img
          src={imgCover()}
          alt={c.title}
          loading="lazy"
        />
        {c.vote_average !== undefined &&
          <p
            style={{
              backgroundColor: (() => {
                if (c.vote_average > 8) {
                  return "green";
                }
                if (c.vote_average > 4) {
                  return "orange";
                }
                if (c.vote_average > 0) {
                  return "red";
                }
                return "gray";
              })(),
            }}
          >
            {c.vote_average.toFixed(1).toString().replace(/^0\.0/g, "NN")}
          </p>
        }
        <h3>{c.title || c.name}</h3>
      </Link>
    </li>
  );
}

ContentCard.propTypes = {
  c: PropTypes.objectOf(
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
};
