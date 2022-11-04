import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ContentCard({ c }) {
  const imgPath = "https://image.tmdb.org/t/p/w200";

  return (
    <li>
      <Link to={`/${c.id}`} className="imgPoster" title={c.title || c.name}>
        {c.poster_path !== null ? (
          <img
            src={`${imgPath}${c.poster_path}`}
            alt={c.title}
            loading="lazy"
          />
        ) : (
          <img
            src="https://placeholder.pics/svg/175x262.5/FFFFFF/FFFFFF/No%20picture%20found"
            alt="empty"
          />
        )}
        <p
          style={{
            backgroundColor: (() => {
              if (c.vote_average > 8) {
                return "green";
              }
              if (c.vote_average > 4) {
                return "orange";
              }
              if (c.vote_average > 0) {
                return "red";
              }
              return "gray";
            })(),
          }}
        >
          {c.vote_average.toFixed(1).toString().replace(/\0.0/g, "NR")}
        </p>
        <h3>{c.title || c.name}</h3>
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
