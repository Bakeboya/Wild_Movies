import React, { useState } from "react";
import UserIcon from "@components/navbar/UserIcon";
import Favori from "@components/navbar/Favori";
import PropTypes from "prop-types";
import componentCoeur from "@assets/fiche/ComponentCoeur2.svg";
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
  const [connected, setConnected] = useState(false);
  const [email, setEmail] = useState("");
  const [fav, setFav] = useState("");
  const [windowFavori, setWindowFavori] = useState(false);
  const displayFavori = () => {
    setWindowFavori(true);
  };
  const closeFavori = () => {
    setWindowFavori(false);
  };
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
      {windowFavori && (
        <Favori
          windowFavori={windowFavori}
          setWindowFavori={setWindowFavori}
          email={email}
          fav={fav}
          closeFavori={closeFavori}
        />
      )}
      <div className="LoginDiv">
        <div className="Login">
          {connected && (
            <>
              <button type="button" onClick={displayFavori} className="stealth">
                <img id="favoriHeart" src={componentCoeur} alt="logo favoris" />
              </button>
              <p>{email}</p>
            </>
          )}
          <UserIcon
            setEmail={setEmail}
            email={email}
            setConnected={setConnected}
            connected={connected}
            fav={fav}
            setFav={setFav}
          />
        </div>
      </div>
    </nav>
  );
};
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
