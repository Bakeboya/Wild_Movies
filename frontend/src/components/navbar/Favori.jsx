import React from "react";
import FaWindowClose from "@meronex/icons/fa/FaWindowClose";
import wildmovies from "@assets/logo3_wildmovies.svg";
import wildmoviesLogo from "@assets/logo_wildmovies.svg";
import PropTypes from "prop-types";

function Favori({ windowFavori, setWindowFavori, email, fav, closeFavori }) {
  return (
    <div className="divFavori">
      <div className="enteteForm">
        {/* <img src={wildmovies} alt="title" id="userTitle" /> */}
        {/* <img src={wildmoviesLogo} alt="title" id="userLogo" /> */}
        <button type="submit" className="close" onClick={closeFavori}>
          {/* <FaWindowClose /> */}
          Xgèt-tyfgtyftygftyègygyg
        </button>
      </div>
      <p>{email}</p>
      <p>{fav}</p>
    </div>
  );
}

export default Favori;

Favori.propTypes = {
  windowFavori: PropTypes.bool.isRequired,
  setWindowFavori: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  fav: PropTypes.string.isRequired,
  closeFavori: PropTypes.func.isRequired,
};
