import React from "react";
import FaWindowClose from "@meronex/icons/fa/FaWindowClose";
import wildmovies from "@assets/logo3_wildmovies.svg";
import wildmoviesLogo from "@assets/logo_wildmovies.svg";
import PropTypes from "prop-types";

function UserInscription({
  handleClose,
  propsHandleConnect,
  propsCreate,
  propsCheckBox,
  propsGetEmail,
  propsGetPassword,
}) {
  return (
    <div className="inscriptionDiv">
      <div className="enteteForm">
        <img src={wildmovies} alt="title" id="userTitle" />
        <img src={wildmoviesLogo} alt="title" id="userLogo" />
        <button type="submit" className="close" onClick={handleClose}>
          <FaWindowClose />
        </button>
      </div>
      <div className="inscriptionMain">
        <input
          type="Email"
          className="userForm champs"
          id="enteteIns"
          placeholder="Adresse email"
          onChange={propsGetEmail}
        />
        <input
          type="password"
          className="userForm champs"
          placeholder="Mot de passe"
          autoComplete="current-password"
          onChange={propsGetPassword}
        />
        <div className="checkBoxDiv">
          <div className="checkBox">
            <input
              type="checkbox"
              id="switch"
              name="switch"
              onChange={propsCheckBox}
            />
            <label htmlFor="switch">
              <input id="none" />
            </label>
          </div>
          <p>
            J'accepte la politique de confidentialité et la politique de cookies
            (requis).
          </p>
        </div>
        <button type="submit" className="userForm create" onClick={propsCreate}>
          Créer mon compte
        </button>
        <button type="submit" onClick={propsHandleConnect} className="link">
          Vous possédez déjà un compte?
        </button>
      </div>
    </div>
  );
}
UserInscription.propTypes = {
  handleClose: PropTypes.string.isRequired,
  propsHandleConnect: PropTypes.string.isRequired,
  propsCreate: PropTypes.string.isRequired,
  propsCheckBox: PropTypes.string.isRequired,
  propsGetEmail: PropTypes.string.isRequired,
  propsGetPassword: PropTypes.string.isRequired,
};
export default UserInscription;
