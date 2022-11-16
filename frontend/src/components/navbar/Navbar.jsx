import React, { useState } from "react";
import PropTypes from "prop-types";
import UserIcon from "@components/navbar/UserIcon";
import Loupe from "./Loupe";
import WildMovies from "./WildMovies";

function Navbar({ setResults }) {
  const [fixed, setFixed] = useState(true);
  // const [connected, setConnected] = useState(false);

  const detailConnected = () => {
    // console.log(connected);
  };

  return (
    <nav
      className={!fixed ? "Navbar" : "Navbar Bottom"}
      // onClick={detailConnected}
    >
      <WildMovies setResults={setResults} />
      <Loupe />
      <UserIcon />
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  setResults: PropTypes.func.isRequired,
};
