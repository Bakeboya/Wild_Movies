import React from "react";
import FaWindowClose from "@meronex/icons/fa/FaWindowClose";

function User() {
  const [connect, setConnect] = React.useState(false);
  const [inscription, setInscription] = React.useState(false);
  const [hide, setHide] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(true);
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [accountData, setAccountData] = React.useState([
    {
      userName: "a",
      userPassword: "b",
    },
    {
      userName: "c",
      userPassword: "d",
    },
  ]);
  let idSuccess = false;

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
    // const alreadyExist = accountData.find((element) => element.userName === mail);
    // if (alreadyExist) {
    //   alert(`Ce nom d'utilisateur existe déjà`);
    // }
    // else {
    setAccountData(
      accountData.push({ userName: mail, userPassword: password })
    );
    // };
    // console.log(accountData);
    // alert(`Votre compte ${mail} a bien été créé.`);
    // setConnect(true);
    // setInscription(false);
    setHide(true);
    setHidePassword(true);
  };
  const connectAccount = () => {
    const autorisation = accountData.find(
      (element) => element.userName === mail
    );
    // console.log(autorisation);
    if (!autorisation) {
      // alert(`Ce compte utilisateur n'existe pas.`);
    } else if (autorisation.userPassword === password) {
      idSuccess = true;
      // console.log(`Autorisation = ${idSuccess}`);
      // alert(`Vous êtes connecté au compte ${mail}.`);
      // setConnect(false);
    } else {
      // console.log(`Autorisation = ${idSuccess}`);
      // alert(`Votre mot de passe n'est pas valide.`);
      setConnect(true);
    }
    setInscription(false);
    setHide(true);
    setHidePassword(true);
  };
  const handleMain = () => {
    setConnect(false);
    setInscription(false);
    setHide(false);
    setHidePassword(true);
  };
  const handlePassword = () => {
    setMail("");
    setConnect(false);
    setInscription(false);
    setHide(true);
    setHidePassword(false);
  };
  const sendPassword = () => {
    setConnect(true);
    setInscription(false);
    setHide(true);
    setHidePassword(true);
    // alert(`Un mail vous a été envoyé pour réinitialiser votre mot de passe à l'adresse ${mail}`);
  };

  return (
    <div>
      <div className={!hide ? "userDiv" : "userDiv hide"}>
        <div>
          <button type="submit" className="close">
            <FaWindowClose />
          </button>
        </div>
        <div className="userMain">
          <button type="submit" className="buttonUser" onClick={handleConnect}>
            Se connecter
          </button>
          <button
            type="submit"
            className="buttonUser"
            onClick={handleInscription}
          >
            S'inscrire
          </button>
        </div>
      </div>
      {connect && (
        <div className="connectDiv">
          <div>
            <button type="submit" className="close" onClick={handleMain}>
              <FaWindowClose />
            </button>
          </div>
          <div className="connectMain">
            <input
              type="text"
              name="uname"
              placeholder="Adresse email"
              className="userForm"
              id="enteteConnect"
              onChange={getMail}
            />
            <input
              type="text"
              name="pass"
              placeholder="Mot de passe"
              className="userForm"
              onChange={getPassword}
            />
            <button type="submit" className="userForm" onClick={connectAccount}>
              Se Connecter
            </button>
            <button type="submit" onClick={handlePassword} className="link">
              Mot de passe oublié?
            </button>
            <button type="submit" onClick={handleInscription} className="link">
              Pas de compte? Créer votre compte.
            </button>
          </div>
        </div>
      )}
      {inscription && (
        <div className="inscriptionDiv">
          <div>
            <button type="submit" className="close" onClick={handleMain}>
              <FaWindowClose />
            </button>
          </div>
          <div className="inscriptionMain">
            <input
              type="text"
              placeholde="Email"
              className="userForm"
              id="enteteIns"
              placeholder="Adresse email"
              onChange={getMail}
            />
            <input
              type="text"
              className="userForm"
              placeholder="Mot de passe"
              onChange={getPassword}
            />
            <div className="checkBoxDiv">
              <div className="checkBox">
                <input type="checkbox" className="box" />
                <label htmlFor="politique">
                  J'accepte la politique de confidentialité et la politique de
                  cookies (requis).
                </label>
              </div>
              <div className="checkBox">
                <input type="checkbox" className="box" />
                <label htmlFor="news">
                  Je souhaite recevoir les newletters (environ une fois par
                  mois).
                </label>
              </div>
            </div>
            <button type="submit" className="userForm" onClick={createAccount}>
              Créer mon compte.
            </button>
            <button type="submit" onClick={handleConnect} className="link">
              Vous possédez déjà un compte?
            </button>
          </div>
        </div>
      )}
      <div
        className={!hidePassword ? "userPasswordDiv" : "userPasswordDiv hide"}
      >
        <div>
          <button type="submit" className="close" onClick={handleMain}>
            <FaWindowClose />
          </button>
        </div>
        <div className="userPassword">
          <input
            type="mail"
            placeholder="Adresse email"
            className="userForm"
            onChange={getMail}
          />
          <button type="submit" className="userForm" onClick={sendPassword}>
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
