import React, { useState } from "react";
import PropTypes from "prop-types";
import ImgTemp from "@assets/fiche/ImgTemp.png";

function ActorImg({
  actImg,
  actName,
  biography,
  birthday,
  gender,
  placeOfBirth,
  deathday,
  homepage,
}) {
  const imgAct = `http://image.tmdb.org/t/p/h632/${actImg}`;
  const [toggle, setToggle] = useState(false);

  function getAge() {
    const dt = new Date(birthday);
    const deathTime = new Date(deathday);
    let diff = "";
    if (deathday === null) {
      diff = Date.now() - dt.getTime();
    } else {
      diff = deathTime - dt.getTime();
    }
    const age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  return (
    <div className="actorsInfos">
      <div className="imgNameInfos">
        <div className="picture">
          <img
            className="actorImg"
            src={actImg != null ? imgAct : ImgTemp}
            alt={actName}
          />
        </div>

        <h2>{actName}</h2>

        <div className="moreInfos">
          <div className="actorGender">
            <p className="titles"> Genre </p>

            {gender === 1 ? <p> Femme </p> : <p> Homme </p>}
          </div>

          <div className="actorBirthday">
            <p className="titles"> Date de naissance </p>
            <p>{birthday}</p>
            <p>{getAge()} ans</p>
          </div>

          <div className="placeBirth">
            <p className="titles"> Lieu de naissance </p>
            <p>{placeOfBirth}</p>
          </div>

          {deathday && (
            <div className="deathday">
              <p className="titles"> Date du décès </p>

              <p>
                {deathday} à {getAge()} ans
              </p>
            </div>
          )}

          <div className="homepage">
            {homepage && (
              <>
                <p className="titles"> Site Web </p>
                <a href={homepage}> {homepage} </a>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="actorBio">
        <h3> Biographie </h3>
        {biography === "" ? (
          <p className="emptyBio">
            {" "}
            Désolé il n'y a pas de biographie disponible pour cette personne.
          </p>
        ) : (
          <>
            <p className={toggle ? "bioDesktop open" : "bioDesktop"}>
              {biography}
            </p>
            <button
              type="button"
              className="expand"
              onClick={() => setToggle(!toggle)}
            >
              Lire {toggle ? "moins" : "plus"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

ActorImg.propTypes = {
  actImg: PropTypes.string.isRequired,
  actName: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  placeOfBirth: PropTypes.string.isRequired,
  deathday: PropTypes.string.isRequired,
  homepage: PropTypes.string.isRequired,
};
export default ActorImg;
