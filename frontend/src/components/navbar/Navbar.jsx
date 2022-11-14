import React, { useState } from "react";
import PropTypes from "prop-types";
import UserIcon from "@components/navbar/UserIcon";
import Loupe from "./Loupe";
import WildMovies from "./WildMovies";

function Navbar({
  setEmptySearch,
  setResults,
  setSearch,
  setSearchText,
  setSearchPage,
  setFiltersPage,
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
        setSearch={setSearch}
        setSearchText={setSearchText}
        setSearchPage={setSearchPage}
        setFiltersPage={setFiltersPage}
        setResults={setResults}
        setShowModal={setShowModal}
        setShowSearchModal={setShowSearchModal}
        setShowFiltersModal={setShowFiltersModal}
      />
      <Loupe
        setEmptySearch={setEmptySearch}
        setSearch={setSearch}
        setSearchText={setSearchText}
        setSearchPage={setSearchPage}
        setFiltersPage={setFiltersPage}
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
  setSearch: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
  setSearchPage: PropTypes.func.isRequired,
  setFiltersPage: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  setShowSearchModal: PropTypes.func.isRequired,
  setShowFiltersModal: PropTypes.func.isRequired,
};
