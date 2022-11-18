import ImgTemp from "@assets/fiche/ImgTemp.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CastingCarouCard({ movieImg, movieTitle, job, link, id }) {


    return (
        <div className="castingCarouCard">
            <div classname="castinCarouImg">
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
    movieImg: PropTypes.isRequired,
    movieTitle: PropTypes.isRequired,
    date: PropTypes.isRequired,
    id: PropTypes.isRequired,
    type: PropTypes.isRequired,
};

export default CastingCarouCard;
