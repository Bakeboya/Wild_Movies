import React from "react";
import Loupe from "./Loupe";
import User from "./User";
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
