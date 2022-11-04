import React from "react";
import PropTypes from "prop-types";

const displayPath = "https://image.tmdb.org/t/p/w200";

function DataMovie({ poster, image, title, year, genre, categorie, note }) {
  return (
    <div className="dataMovieDiv">
      <img
        src={`${displayPath}${poster}`}
        alt="Unable to load"
        className="displayPoster"
      />
      <img
        src={`${displayPath}${image}`}
        alt="Unable to load"
        className="displayImage"
      />
      <div className="dataDetails">
        <h2 className="dataTitle">{title}</h2>
        <h3 className="dataNote">{note}</h3>
        {categorie.map((e) =>
          genre.map(
            (i) => e.id === i && <h3 className="dataGenre">{e.name}</h3>
          )
        )}
        <h4 className="dataYear">{year}</h4>
      </div>
    </div>
  );
}

DataMovie.propTypes = {
  poster: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
};
export default DataMovie;
