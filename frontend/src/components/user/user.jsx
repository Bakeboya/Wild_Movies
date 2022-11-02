import React, { useState } from "react";
import FaWindowClose from "@meronex/icons/fa/FaWindowClose";
import PropTypes from "prop-types";
import wildmovies from "../../assets/logo3_wildmovies.svg";
import wildmoviesLogo from "../../assets/logo_wildmovies.svg";
import logoCreate from "../../assets/user/104368-thank-you.gif";
import logoConnect from "../../assets/user/92578-check-okey-done.gif";
import logoSend from "../../assets/user/lf30_editor_01fqcrbg-150x150.gif";
import logoYes from "../../assets/user/11743-check-mark-yes.gif";
import logoNo from "../../assets/user/101930-no-acces-denied.gif";
import logoNews from "../../assets/user/lf30_editor_n2dzrzma-150x150.gif";

function User({ handleClose }) {
  const [active, setActive] = useState(true);
  const [connect, setConnect] = useState(false);
  const [inscription, setInscription] = useState(false);
  const [activeCheck, setActiveCheck] = useState(false);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [hide, setHide] = React.useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [displayPopUpConnect, setDisplayPopUpConnect] = useState(false);
  const [displayPopUpNews, setDisplayPopUpNews] = useState(false);
  const [displayPopUpCreate, setDisplayPopUpCreate] = useState(false);
  const [displayPopUpSend, setDisplayPopUpSend] = useState(false);
  const accountData = [
    {
      userName: "a",
      userPassword: "b",
    },
    {
      userName: "anticonstitutionnellement",
      userPassword: "b",
    },
  ];
  const getMail = (e) => {
    setMail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConnect = () => {
    setConnect(true);
    setInscription(false);
    setHide(true);
    setHidePassword(true);
  };
  const handleInscription = () => {
    setInscription(true);
    setConnect(false);
    setHide(true);
    setHidePassword(true);
  };
  const createAccount = () => {
    const alreadyExist = accountData.find(
      (element) => element.userName === mail
    );
    if (alreadyExist) {
      // console.log(accountData);
      // alert(`Ce nom d'utilisateur existe déjà`);
    } else if (mail !== "" && password !== "") {
      if (activeCheck) {
        accountData.push({ userName: mail, userPassword: password });
        // console.log(accountData);
        setDisplayPopUpNews(true);
        setConnect(true);
        setInscription(false);
      } else {
        // alert(`Veuillez accepter la politique de confidentialité.`);
        setInscription(true);
      }
    } else {
      // alert("Veuillez renseigner vos identifiants.");
    }
    setHide(true);
    setHidePassword(true);
  };
  const connectAccount = () => {
    const autorisation = accountData.find(
      (element) => element.userName === mail
    );
    if (!autorisation) {
      // alert(`Ce compte utilisateur n'existe pas.`);
    } else if (autorisation.userPassword === password) {
      setDisplayPopUpConnect(true);
      setConnect(false);
    } else {
      // alert(`Votre mot de passe n'est pas valide.`);
      setConnect(true);
    }
    setInscription(false);
    setHide(true);
    setHidePassword(true);
  };
  const handleCheckBox = () => {
    setActiveCheck(!activeCheck);
  };
  const handlePassword = () => {
    setMail("");
    setConnect(false);
    setInscription(false);
    setHide(true);
    setHidePassword(false);
  };
  const sendPassword = () => {
    if (mail !== "") {
      setDisplayPopUpSend(true);
      setConnect(true);
      setInscription(false);
      setHide(true);
      setHidePassword(true);
    } else {
      // alert("Veuillez renseigner une adresse email.");
    }
  };
  const exitNews = () => {
    setDisplayPopUpNews(false);
    setDisplayPopUpCreate(true);
  };
  const exitCreate = () => {
    setDisplayPopUpCreate(false);
  };
  const exitSend = () => {
    setDisplayPopUpSend(false);
  };

  return (
    <div>
      {active && (
        <div className="userContainer">
          {displayPopUpConnect && (
            <div className="popUp">
              <div className="overlay">
                <img src={wildmovies} alt="title" className="userTitle" />
                <img src={logoConnect} alt="Connection" id="logoConnect" />
                <p className="overlayTitle">
                  Vous êtes connecté au compte{" "}
                  <span className="messagePopUp">{mail}</span>.
                </p>
                <button
                  type="submit"
                  className="linkClose"
                  onClick={handleClose}
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
          {displayPopUpNews && (
            <div className="popUp">
              <div className="overlay overlayNews">
                <img src={wildmovies} alt="title" className="userTitle" />
                <button
                  type="submit"
                  className="buttonLottie"
                  onClick={exitNews}
                >
                  <img src={logoNews} alt="Yes" id="logoNews" />
                </button>
                <div className="questionNews">
                  <button
                    type="submit"
                    className="buttonLottie"
                    onClick={exitNews}
                  >
                    <img src={logoYes} alt="Yes" id="logoYes" />
                  </button>
                  <button
                    type="submit"
                    className="buttonLottie"
                    onClick={exitNews}
                  >
                    <img src={logoNo} alt="No" id="logoNo" />
                  </button>
                </div>
              </div>
            </div>
          )}
          {displayPopUpCreate && (
            <div className="popUp">
              <div className="overlay">
                <img src={wildmovies} alt="title" className="userTitle" />
                <img src={logoCreate} alt="Inscription" id="logoCreate" />
                <p className="overlayTitle">
                  Votre compte utilisateur pour l'adresse{" "}
                  <span className="messagePopUp">{mail}</span> a bien été créé.
                </p>
                <button
                  type="submit"
                  className="linkClose"
                  onClick={exitCreate}
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
          {displayPopUpSend && (
            <div className="popUp">
              <div className="overlay">
                <img src={wildmovies} alt="title" className="userTitle" />
                <img src={logoSend} alt="Message" id="logoSend" />
                <p className="overlayTitle">
                  Afin de réinitialiser votre mot de passe, un mail vous a été
                  envoyé à l'adresse{" "}
                  <span className="messagePopUp">{mail}</span>.
                </p>
                <button type="submit" className="linkClose" onClick={exitSend}>
                  Fermer
                </button>
              </div>
            </div>
          )}
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
                onClick={handleConnect}
              >
                Se connecter
              </button>
              <button
                type="submit"
                className="buttonUser signIn"
                onClick={handleInscription}
              >
                S'inscrire
              </button>
            </div>
          </div>
          {connect && (
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
                  onChange={getMail}
                />
                <input
                  type="password"
                  name="pass"
                  placeholder="Mot de passe"
                  className="userForm champs"
                  autoComplete="current-password"
                  onChange={getPassword}
                />
                <button
                  type="submit"
                  className="userForm signUp"
                  onClick={connectAccount}
                >
                  Se Connecter
                </button>
                <button
                  type="submit"
                  onClick={handlePassword}
                  className="linkForget"
                >
                  Mot de passe oublié?
                </button>
                <button
                  type="submit"
                  onClick={handleInscription}
                  className="linkQuestion"
                >
                  Pas de compte? Créer votre compte.
                </button>
              </div>
            </div>
          )}
          {inscription && (
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
                  type="text"
                  placeholde="Email"
                  className="userForm champs"
                  id="enteteIns"
                  placeholder="Adresse email"
                  onChange={getMail}
                />
                <input
                  type="password"
                  className="userForm champs"
                  placeholder="Mot de passe"
                  autoComplete="current-password"
                  onChange={getPassword}
                />
                <div className="checkBoxDiv">
                  <div className="checkBox">
                    <input type="checkbox" id="switch" onChange={handleCheckBox} />
                    <label for="switch"></label>
                  </div>
                  <p>J'accepte la politique de confidentialité et la politique
                    de cookies (requis).</p>
                </div>
                <button
                  type="submit"
                  className="userForm create"
                  onClick={createAccount}
                >
                  Créer mon compte
                </button>
                <button type="submit" onClick={handleConnect} className="link">
                  Vous possédez déjà un compte?
                </button>
              </div>
            </div>
          )}
          <div
            className={
              !hidePassword ? "userPasswordDiv" : "userPasswordDiv hide"
            }
          >
            <div className="enteteForm">
              <img src={wildmovies} alt="title" id="userTitle" />
              <img src={wildmoviesLogo} alt="title" id="userLogo" />
              <button type="submit" className="close" onClick={handleClose}>
                <FaWindowClose />
              </button>
            </div>
            <div className="userPassword">
              <input
                type="mail"
                placeholder="Adresse email"
                className="userForm champs"
                onChange={getMail}
              />
              <button
                type="submit"
                className="userForm send"
                onClick={sendPassword}
              >
                Envoyer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

User.propTypes = {
  handleClose: PropTypes.string.isRequired,
};

export default User;
