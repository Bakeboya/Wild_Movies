import React from "react";
import FaWindowClose from "@meronex/icons/fa/FaWindowClose";
import wildmovies from "@assets/logo3_wildmovies.svg";
import wildmoviesLogo from "@assets/logo_wildmovies.svg";
import PropTypes from "prop-types";

function UserConnect({
  handleClose,
  propsConnect,
  propsPassword,
  propsHandleInscription,
  propsGetEmail,
  propsGetPassword,
}) {
  return (
    <div className="connectDiv">
      <div className="enteteForm">
        <img src={wildmovies} alt="title" id="userTitle" />
        <img src={wildmoviesLogo} alt="title" id="userLogo" />
        <button type="submit" className="close" onClick={handleClose}>
          <FaWindowClose />
        </button>
      </div>
      <div className="connectMain">
        <input
          type="text"
          name="uname"
          placeholder="Adresse email"
          className="userForm champs"
          id="enteteConnect"
          onChange={propsGetEmail}
        />
        <input
          type="password"
          name="pass"
          placeholder="Mot de passe"
          className="userForm champs"
          autoComplete="current-password"
          onChange={propsGetPassword}
        />
        <button
          type="submit"
          className="userForm signUp"
          onClick={propsConnect}
        >
          Se Connecter
        </button>
        <button type="submit" onClick={propsPassword} className="linkForget">
          Mot de passe oublié?
        </button>
        <button
          type="submit"
          onClick={propsHandleInscription}
          className="linkQuestion"
        >
          Pas de compte? Créer votre compte.
        </button>
      </div>
    </div>
  );
}
UserConnect.propTypes = {
  handleClose: PropTypes.string.isRequired,
  propsConnect: PropTypes.string.isRequired,
  propsPassword: PropTypes.string.isRequired,
  propsHandleInscription: PropTypes.string.isRequired,
  propsGetEmail: PropTypes.string.isRequired,
  propsGetPassword: PropTypes.string.isRequired,
};
export default UserConnect;
