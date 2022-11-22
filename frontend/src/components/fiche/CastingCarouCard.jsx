import ImgTemp from "@assets/fiche/ImgTemp.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CastingCarouCard({ movieImg, movieTitle, job, link, id }) {
  return (
    <div className="castingCarouCard">
      <div className="castinCarouImg">
        <Link to={link + id}>
          {movieImg !== null ? (
            <img
              alt="Affiche du film"
              className="castingCarouCard_img"
              src={`https://image.tmdb.org/t/p/w200/${movieImg}`}
            />
          ) : (
            <img
              alt="Affiche du film non disponible"
              className="castingCarouCard_img"
              src={ImgTemp}
            />
          )}
        </Link>
      </div>

      <div className="castingCarouCard_title">
        <p className="castingCarouCard_title_name">{movieTitle}</p>
        <p className="castingCarouCard_title_year">{job}</p>
      </div>
    </div>
  );
}

CastingCarouCard.propTypes = {
  movieImg: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};

export default CastingCarouCard;
