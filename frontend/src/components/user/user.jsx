import React from "react";
import FaWindowClose from "@meronex/icons/fa/FaWindowClose";

function User() {
  const [connect, setConnect] = React.useState(false);
  const [inscription, setInscription] = React.useState(false);
  const [hide, setHide] = React.useState(false);

  const handleConnect = () => {
    setConnect(true);
    setInscription(false);
    setHide(true);
  };
  const handleInscription = () => {
    setInscription(true);
    setConnect(false);
    setHide(true);
  };
  const handleMain = () => {
    setConnect(false);
    setInscription(false);
    setHide(false);
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
              placeholde="Email"
              className="userForm"
              id="enteteConnect"
            />
            <input type="text" placeholder="" className="userForm" />
            <button type="submit" className="userForm">
              Se Connecter
            </button>
            <p>Mot de passe oublié?</p>
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
            />
            <input type="text" placeholder="" className="userForm" />
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
            <button type="submit" className="userForm">
              Créer mon compte.
            </button>
            <button type="submit" onClick={handleConnect} className="link">
              Vous possédez déjà un compte?
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
