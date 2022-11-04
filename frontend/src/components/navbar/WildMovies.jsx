import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_wildmovies.svg";
import title from "../../assets/logo3_wildmovies.svg";

function WildMovies({ setResults }) {
  const upToGo = () => {
    window.scrollTo(0, 0);
    setResults([]);
  };

  return (
    <div className="WildMoviesDiv">
      <Link to="/" className="WildMovies" onClick={upToGo}>
        <img src={title} className="WildTitle" alt="title" />
        <img src={logo} className="WildLogo" alt="logo" />
      </Link>
    </div>
  );
}

export default WildMovies;

WildMovies.propTypes = {
  setResults: PropTypes.func.isRequired,
};
