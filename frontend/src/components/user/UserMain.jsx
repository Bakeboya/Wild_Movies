import React, { useState } from "react";
import FaWindowClose from "@meronex/icons/fa/FaWindowClose";
import wildmovies from "@assets/logo3_wildmovies.svg";
import wildmoviesLogo from "@assets/logo_wildmovies.svg";
import PropTypes from "prop-types";

function UserMain({ handleClose, propsHandleConnect, propsHandleInscription }) {
  const [hide, setHide] = useState(false);
  return (
    <div className={!hide ? "userDiv" : "userDiv hide"}>
      <div className="enteteForm">
        <img src={wildmovies} alt="title" id="userTitle" />
        <img src={wildmoviesLogo} alt="title" id="userLogo" />
        <button type="submit" className="close" onClick={handleClose}>
          <FaWindowClose />
        </button>
      </div>
      <div className="userMain">
        <button
          type="submit"
          className="buttonUser signUp"
          onClick={propsHandleConnect}
        >
          Se connecter
        </button>
        <button
          type="submit"
          className="buttonUser signIn"
          onClick={propsHandleInscription}
        >
          S'inscrire
        </button>
      </div>
    </div>
  );
}
UserMain.propTypes = {
  handleClose: PropTypes.string.isRequired,
  propsHandleConnect: PropTypes.string.isRequired,
  propsHandleInscription: PropTypes.string.isRequired,
};
export default UserMain;
