import React from "react";
import Loupe from "./Loupe.jsx";
import User from "./User.js";
import WildMovies from "./WildMovies";

function Navbar() {
  return (
    <div className="Navbar">
      <WildMovies />
      <Loupe />
      <User />
    </div>
  );
}

export default Navbar;
