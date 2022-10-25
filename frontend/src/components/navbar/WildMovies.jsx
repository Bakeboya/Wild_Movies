import React from "react";
import title from "../../assets/logo_wildmovies.svg";
import logo from "../../assets/logo3_wildmovies.svg";

function WildMovies() {
  return (
    <div className="WildMovies">
      <img src={title} className="WildTitle" alt="title" />
      <img src={logo} className="WildLogo" alt="logo" />
    </div>
  );
}

export default WildMovies;
