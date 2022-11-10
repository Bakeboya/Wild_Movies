import imgTemp from "@assets/imgTemp.webp";
import PropTypes from "prop-types";

function DirectorMoviesCard({ movieImg, movieTitle }) {
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

      <div>
        <p className="directorMoviesCard_title">{movieTitle}</p>
      </div>
    </div>
  );
}

DirectorMoviesCard.propTypes = {
  movieImg: PropTypes.isRequired,
  movieTitle: PropTypes.isRequired,
};

export default DirectorMoviesCard;
