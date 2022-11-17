import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import wildmovies from "@assets/logo3_wildmovies.svg";
import logoCreate from "@assets/user/104368-thank-you.gif";
import logoConnect from "@assets/user/92578-check-okey-done.gif";
import logoSend from "@assets/user/lf30_editor_01fqcrbg-150x150.gif";
import logoYes from "@assets/user/11743-check-mark-yes.gif";
import logoNo from "@assets/user/101930-no-acces-denied.gif";
import logoNews from "@assets/user/lf30_editor_n2dzrzma-150x150.gif";
import axios from "axios";
import UserMain from "./UserMain";
import UserPassword from "./UserPassword";
import UserInscription from "./UserInscription";
import UserConnect from "./UserConnect";

function User({ handleActive, setEmail, email, connected, setConnected }) {
  const [active, setActive] = useState(true);
  const [connect, setConnect] = useState(false);
  const [inscription, setInscription] = useState(false);
  const [activeCheck, setActiveCheck] = useState(false);
  const [password, setPassword] = useState("");
  const [hide, setHide] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [displayPopUpConnect, setDisplayPopUpConnect] = useState(false);
  const [displayPopUpNews, setDisplayPopUpNews] = useState(false);
  const [displayPopUpCreate, setDisplayPopUpCreate] = useState(false);
  const [displayPopUpSend, setDisplayPopUpSend] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [connect]);
  const getEmail = (e) => {
    setEmail(e.target.value);
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
    const alreadyExist = users.find((element) => element.email === email);
    if (alreadyExist) {
      // alert(`Ce nom d'utilisateur existe déjà`);
    } else if (email !== "" && password !== "") {
      if (activeCheck) {
        axios
          .post("http://localhost:5000/users", { email, password })
          .then(() => {
            setDisplayPopUpNews(true);
            setConnect(true);
            setInscription(false);
          })
          .catch((err) => {
            console.error(err);
          });
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
    const autorisation = users.find((element) => element.email === email);
    if (!autorisation) {
      // alert(`Ce compte utilisateur n'existe pas.`);
    } else if (autorisation.password === password) {
      setConnect(false);
      setDisplayPopUpConnect(true);
      setConnected(true);
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
    setEmail("");
    setConnect(false);
    setInscription(false);
    setHide(true);
    setHidePassword(false);
  };
  const handleMain = () => {
    setEmail("");
    setConnect(true);
    setInscription(false);
    setHide(true);
    setHidePassword(true);
  };
  const sendPassword = () => {
    if (email !== "") {
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
                  Vous êtes connecté au compte</p>
                <span className="messagePopUp">{email}</span>
                <button
                  type="submit"
                  className="linkClose"
                  onClick={handleActive}
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
                  Votre compte utilisateur a bien été créé à l'adresse
                </p>
                <span className="messagePopUp">{email}</span>
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
                  envoyé à l'adresse</p>
                  <span className="messagePopUp">{email}</span>
                <button type="submit" className="linkClose" onClick={exitSend}>
                  Fermer
                </button>
              </div>
            </div>
          )}
          {!hide && (
            <UserMain
              handleClose={handleActive}
              propsHandleConnect={handleConnect}
              propsHandleInscription={handleInscription}
            />
          )}
          {connect && (
            <UserConnect
              handleClose={handleActive}
              propsConnect={connectAccount}
              propsPassword={handlePassword}
              propsHandleInscription={handleInscription}
              propsGetEmail={getEmail}
              propsGetPassword={getPassword}
              connected={connected}
            />
          )}
          {inscription && (
            <UserInscription
              handleClose={handleActive}
              propsHandleConnect={handleConnect}
              propsCreate={createAccount}
              propsCheckBox={handleCheckBox}
              propsGetEmail={getEmail}
              propsGetPassword={getPassword}
            />
          )}
          {!hidePassword && (
            <UserPassword
              propsHandleMain={handleMain}
              propsGetEmail={getEmail}
              propsSendPassword={sendPassword}
            />
          )}
        </div>
      )}
      ;
    </div>
  );
}
User.propTypes = {
  handleActive: PropTypes.string.isRequired,
  setEmail: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  connected: PropTypes.string.isRequired,
  setConnected: PropTypes.string.isRequired,
};
export default User;
