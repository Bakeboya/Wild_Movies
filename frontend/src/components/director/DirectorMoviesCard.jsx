import imgTemp from "@assets/fiche/imgTemp.webp";
import PropTypes from "prop-types";

function DirectorMoviesCard({ movieImg, movieTitle, date }) {
  const year = date.substring(0, 4);

  return (
    <div className="directorMoviesCard">
      <div>
        {movieImg !== "https://image.tmdb.org/t/p/w185null" ? (
          <img
            alt="Affiche du film"
            className="directorMoviesCard_img"
            src={movieImg}
          />
        ) : (
          <img
            alt="Affiche du film non disponible"
            className="directorMoviesCard_temp"
            src={imgTemp}
          />
        )}
      </div>

      <div className="directorMoviesCard_title">
        <p className="directorMoviesCard_title_name">{movieTitle}</p>
        <p className="directorMoviesCard_title_year">{year}</p>
      </div>
    </div>
  );
}

DirectorMoviesCard.propTypes = {
  movieImg: PropTypes.isRequired,
  movieTitle: PropTypes.isRequired,
  date: PropTypes.isRequired,
};

export default DirectorMoviesCard;
