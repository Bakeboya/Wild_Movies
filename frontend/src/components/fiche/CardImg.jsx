import React from "react";
import PropTypes from "prop-types";

function CardImg({ posterPath, originalTitle }) {
  const imgPath = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  const titleFilm = `image du film ${originalTitle}`;

  return (
    <div className="cardImg">
      <div className="imgFilm">
        <img src={imgPath} alt={titleFilm} />
      </div>
      <div className="streaming">
        <img
          src="https://i.pinimg.com/originals/87/70/5a/87705a2ddfc57918abcc7bdb574aec94.png"
          alt="logo amazon prime"
        />
        <p className="streamingLink">
          Disponible en streaming sur Amazon Prime Video
          <p>Regarder maintenant !</p>
        </p>
      </div>
    </div>
  );
}

CardImg.propTypes = {
  posterPath: PropTypes.string.isRequired,
  originalTitle: PropTypes.string.isRequired,
};

export default CardImg;
