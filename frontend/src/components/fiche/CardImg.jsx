import React from "react";
import PropTypes from "prop-types";
import Streaming from "./Streaming";

function CardImg({ posterPath, originalTitle, providers }) {
  const imgPath = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  const titleFilm = `image du film ${originalTitle}`;

  const {
    FR: { flatrate },
  } = providers;

  return (
    <div className="cardImg">
      <div className="imgFilm">
        <img src={imgPath} alt={titleFilm} />
      </div>
      <div className="streamingCard">
        <h3>Streaming</h3>
        <div className="streamLogo">
          {flatrate &&
            flatrate
              .filter(
                (provider) =>
                  provider.provider_name.includes("Amazon") ||
                  provider.provider_name.includes("Canal+") ||
                  provider.provider_name.includes("Netflix") ||
                  provider.provider_name.includes("Disney")
              )
              .map((provider_name, index) => (
                <Streaming key={index} {...provider_name} />
              ))}
        </div>
      </div>
    </div>
  );
}

CardImg.propTypes = {
  posterPath: PropTypes.string.isRequired,
  originalTitle: PropTypes.string.isRequired,
};

export default CardImg;
