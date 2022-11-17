import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_wildmovies.svg";
import title from "../../assets/logo3_wildmovies.svg";

function WildMovies({
  setEmptySearch,
  setSearch,
  setSearchText,
  setSearchPage,
  setFiltersPage,
  setResults,
  setShowModal,
  setShowSearchModal,
  setShowFiltersModal,
}) {
  const handleReset = () => {
    window.scrollTo(0, 0);
    setResults([]);
    setSearch("");
    setSearchText("");
    setSearchPage(1);
    setFiltersPage(1);
    setShowModal(false);
    setShowSearchModal(false);
    setShowFiltersModal(false);
    setEmptySearch("");
  };

  return (
    <div className="WildMoviesDiv">
      <Link to="/" className="WildMovies" onClick={handleReset}>
        <img src={title} className="WildTitle" alt="title" />
        <img src={logo} className="WildLogo" alt="logo" />
      </Link>
    </div>
  );
}

export default WildMovies;

WildMovies.propTypes = {
  setResults: PropTypes.func.isRequired,
  setEmptySearch: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
  setSearchPage: PropTypes.func.isRequired,
  setFiltersPage: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  setShowSearchModal: PropTypes.func.isRequired,
  setShowFiltersModal: PropTypes.func.isRequired,
};
