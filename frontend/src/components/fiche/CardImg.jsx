import React from "react";
import PropTypes from "prop-types";
import Streaming from "./Streaming";

function CardImg({ posterPath, originalTitle, providers }) {
  const imgPath = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  const titleFilm = `image du film ${originalTitle}`;

  return (
    <div className="cardImg">
      <div className="imgFilm">
        <img src={imgPath} alt={titleFilm} />
      </div>
      {providers.FR !== undefined ? (
        <div className="streamingCard">
          <h3>Streaming</h3>
          <div className="streamLogo">
            {providers.FR.flatrate &&
              providers.FR.flatrate
                .filter(
                  (provider) =>
                    provider.provider_name.includes("Amazon") ||
                    provider.provider_name.includes("Canal+") ||
                    provider.provider_name.includes("Netflix") ||
                    provider.provider_name.includes("Disney")
                )
                .map((watch) => (
                  <Streaming
                    logoPath={watch.logo_path}
                    providerName={watch.provider_name}
                  />
                ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

CardImg.propTypes = {
  posterPath: PropTypes.string.isRequired,
  originalTitle: PropTypes.string.isRequired,
  providers: PropTypes.shape(PropTypes.number, PropTypes.string).isRequired,
};

export default CardImg;
