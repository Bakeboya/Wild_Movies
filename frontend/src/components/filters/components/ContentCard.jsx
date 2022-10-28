import PropTypes from "prop-types";
import { Link } from "react-router-dom"

export default function ContentCard({ c }) {
  const imgPath = "https://image.tmdb.org/t/p/w200";

  return (
    <li>
      <Link to={`${c.title}`} className="imgPoster">
        <img src={`${imgPath}${c.poster_path}`} alt={c.title} loading="lazy" />
        <p
          style={{
            backgroundColor: (() => {
              if (c.vote_average > 8) {
                return "green";
              }
              if (c.vote_average > 4) {
                return "orange";
              }
              return "red";
            })(),
          }}
        >
          {c.vote_average}
        </p>
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
