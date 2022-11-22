import React, { useState } from "react";
import UserIcon from "@components/navbar/UserIcon";
import Favori from "@components/navbar/Favori";
import PropTypes from "prop-types";
import Loupe from "./Loupe";
import WildMovies from "./WildMovies";
import componentCoeur from "@assets/fiche/ComponentCoeur2.svg";

function Navbar({ setResults }) {
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
      <WildMovies setResults={setResults} />
      <Loupe />
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
              <button type="button" onClick={displayFavori} className='stealth'>
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
}
Navbar.propTypes = {
  setResults: PropTypes.func.isRequired,
};
export default Navbar;
