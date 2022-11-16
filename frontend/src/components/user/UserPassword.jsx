import React, { useState } from "react";
import FaWindowClose from "@meronex/icons/fa/FaWindowClose";
import wildmovies from "@assets/logo3_wildmovies.svg";
import wildmoviesLogo from "@assets/logo_wildmovies.svg";
import PropTypes from "prop-types";

function UserPassword({ propsHandleMain, propsGetEmail, propsSendPassword }) {
  const [hidePassword, setHidePassword] = useState(false);
  return (
    <div className={!hidePassword ? "userPasswordDiv" : "userPasswordDiv hide"}>
      <div className="enteteForm">
        <img src={wildmovies} alt="title" id="userTitle" />
        <img src={wildmoviesLogo} alt="title" id="userLogo" />
        <button type="submit" className="close" onClick={propsHandleMain}>
          <FaWindowClose />
        </button>
      </div>
      <div className="userPassword">
        <input
          type="mail"
          placeholder="Adresse email"
          className="userForm champs"
          onChange={propsGetEmail}
        />
        <button
          type="submit"
          className="userForm send"
          onClick={propsSendPassword}
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}
UserPassword.propTypes = {
  propsHandleMain: PropTypes.string.isRequired,
  propsGetEmail: PropTypes.string.isRequired,
  propsSendPassword: PropTypes.string.isRequired,
};
export default UserPassword;
