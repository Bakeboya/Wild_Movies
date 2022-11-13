import React, { useState } from "react";
import PropTypes from "prop-types";
import UserIcon from "@components/navbar/UserIcon";
import Loupe from "./Loupe";
import WildMovies from "./WildMovies";

function Navbar({
  setEmptySearch,
  setResults,
  showModal,
  setShowModal,
  setShowSearchModal,
  setShowFiltersModal,
}) {
  const [fixed, setFixed] = useState(true);

  return (
    <nav className={!fixed ? "Navbar" : "Navbar Bottom"}>
      <WildMovies
        setEmptySearch={setEmptySearch}
        setResults={setResults}
        setShowModal={setShowModal}
        setShowSearchModal={setShowSearchModal}
        setShowFiltersModal={setShowFiltersModal}
      />
      <Loupe
        setEmptySearch={setEmptySearch}
        showModal={showModal}
        setShowModal={setShowModal}
        setShowSearchModal={setShowSearchModal}
        setShowFiltersModal={setShowFiltersModal}
      />
      <UserIcon />
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  setResults: PropTypes.func.isRequired,
  setEmptySearch: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  setShowSearchModal: PropTypes.func.isRequired,
  setShowFiltersModal: PropTypes.func.isRequired,
};
