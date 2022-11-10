import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "./Slider";

function Header({ search, setSearch, searchText, setSearchText }) {
  const [poster, setPoster] = useState();
  const page = 1;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ac1108de3648bb230bb19e261e8497cb&language=en-US&page=${page}`
      )
      .then((res) => {
        setPoster(res.data.results);
      });
  }, [page]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSearch(searchText);
    setSearchText("");
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleClick(e);
    }
  };

  return (
    <header className="header">
      {poster && <Slider poster={poster} />}

      <div className="smartBox">
        <div className="wildMovies">
          <Link to="/" className="logoHeader">
            <h1>
              Wild<span>Movies</span>
            </h1>
          </Link>
        </div>

        <div>
          <p className="headerTitle">
            Le meilleur moteur de recherche de films et de séries
          </p>
        </div>

        <Link to="/search">
          <button type="button" className="searchButton">
            RECHERCHER
          </button>
        </Link>
      </div>

      <div className="deskBox">
        <div>
          <p className="headerTitle2">
            Le meilleur moteur de recherche de films et de séries
          </p>
        </div>
        <div className="searchBar">
          <input
            placeholder="Rechercher un film, une série"
            value={searchText}
            onChange={handleChange}
            onKeyPress={handleKeypress}
          />
          <button
            type="button"
            className="searchButtonDesktop"
            onClick={handleClick}
          >
            RECHERCHER
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};
