import React from "react";
import logo from "../../assets/logo_wildmovies.svg";
import title from "../../assets/logo3_wildmovies.svg";

function WildMovies() {
  return (
    <div className="WildMoviesDiv">
      <div className="WildMovies">
        <img src={title} className="WildTitle" alt="title" />
        <img src={logo} className="WildLogo" alt="logo" />
      </div>
    </div>
  );
}

export default WildMovies;
