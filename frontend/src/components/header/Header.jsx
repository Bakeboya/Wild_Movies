import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Slider from "./Slider";

function Header() {
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

        <div>
          <button type="button" className="searchButton">
            RECHERCHER
          </button>
        </div>
      </div>

      <div className="deskBox">
        <div>
          <p className="headerTitle2">
            Le meilleur moteur de recherche de films et de séries
          </p>
        </div>
        <div className="searchBar">
          <input placeholder="Commencer ma recherche" />
          <Link to="/">
            <button type="submit" className="searchButtonDesktop">
              RECHERCHER
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
