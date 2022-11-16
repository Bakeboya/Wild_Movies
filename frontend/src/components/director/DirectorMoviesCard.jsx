import imgTemp from "@assets/fiche/imgTemp.webp";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function DirectorMoviesCard({ movieImg, movieTitle, date, id, type }) {

  const year = date.substring(0, 4);

  return (

    <div className="directorMoviesCard">

      <div>
        <Link to={`/${type}/${id}`}>

          {movieImg !== "https://image.tmdb.org/t/p/w500null" ? (

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
        </Link>
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
  id: PropTypes.isRequired,
  type: PropTypes.isRequired,

};

export default DirectorMoviesCard;
