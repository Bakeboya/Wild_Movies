import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import MdOptions from "@meronex/icons/ios/MdOptions";
import Slider from "./Slider";

function Header({
  setSearch,
  searchText,
  setSearchText,
  searchType,
  setSearchType,
  showModal,
  setShowModal,
}) {
  const [poster, setPoster] = useState();
  const [modalToggle, setModalToggle] = useState(false);
  const [toggleIndex, setToggleIndex] = useState(1);

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

  const openCloseModal = () => {
    setShowModal(!showModal);
  };

  const filterModal = () => {
    setModalToggle(!modalToggle);
  };

  const handleFilter1 = () => {
    setSearchType("multi");
    setToggleIndex(1);
  };

  const handleFilter2 = () => {
    setSearchType("movie");
    setToggleIndex(2);
  };

  const handleFilter3 = () => {
    setSearchType("tv");
    setToggleIndex(3);
  };

  const handleFilter4 = () => {
    setSearchType("person");
    setToggleIndex(4);
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

        <button type="button" className="searchButton" onClick={openCloseModal}>
          RECHERCHER
        </button>
      </div>

      <div className="deskBox">
        <div>
          <p className="headerTitle2">
            Le meilleur moteur de recherche de films et de séries
          </p>
        </div>
        <div className="searchBar">
          <input
            placeholder="Rechercher un film, une série ou une personne"
            value={searchText}
            onChange={handleChange}
            onKeyPress={handleKeypress}
          />
          <button
            type="button"
            className="filterButtonDesktop"
            onClick={filterModal}
          >
            <MdOptions />
          </button>
          <div
            className={
              modalToggle
                ? "filterOptionsModal optionsModalOpen"
                : "filterOptionsModal"
            }
          >
            <button
              className={toggleIndex === 1 ? "selected" : ""}
              type="button"
              onClick={handleFilter1}
            >
              Tout
            </button>
            <button
              className={toggleIndex === 2 ? "selected" : ""}
              type="button"
              onClick={handleFilter2}
            >
              Films
            </button>
            <button
              className={toggleIndex === 3 ? "selected" : ""}
              type="button"
              onClick={handleFilter3}
            >
              Séries
            </button>
            <button
              className={toggleIndex === 4 ? "selected" : ""}
              type="button"
              onClick={handleFilter4}
            >
              Personnes
            </button>
          </div>
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
  setSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  searchType: PropTypes.string.isRequired,
  setSearchType: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
