import React, { useState } from "react";
import imgTemp from "@assets/fiche/imgTemp.webp";
import PropTypes from "prop-types";

function DirectorProfile({
  picture,
  name,
  birthday,
  alias,
  city,
  bio,
  deathday,
}) {
  const imgLink = `http://image.tmdb.org/t/p/w500${picture}`;
  const imgName = `Image de ${name}`;
  const [textShow, setTextShow] = useState(false);

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
    <div className="directorProfile">
      <div className="directorProfile_Picture">
        {imgLink !== "https://image.tmdb.org/t/p/w500null" ? (
          <img src={imgLink} alt={imgName} />
        ) : (
          <img src={imgTemp} alt={imgName} />
        )}
      </div>

      <div className="directorProfile_Info">
        <div className="directorProfile_Info_Name">
          <h2>{name}</h2>
        </div>

        <div className="persoBox">
          <div>
            {alias && <p className="persoBox_Title">Alias</p>}
            {alias &&
              alias.map((element) => {
                return <p className="persoBox_Text">{element}</p>;
              })}
          </div>

          <div>
            {deathday ? (
              <>
                <p className="persoBox_Title">Date de naissance</p>
                <p className="persoBox_Text">{birthday}</p>
                <p className="persoBox_Title">Date de décès</p>
                <p className="persoBox_Text">
                  {deathday} à {getAge()} ans
                </p>
              </>
            ) : (
              <>
                <p className="persoBox_Title">Date de naissance</p>
                <p className="persoBox_Text">
                  {birthday} / {getAge()} ans
                </p>
              </>
            )}
          </div>

          <div>
            <p className="persoBox_Title">Lieu de naissance</p>
            <p className="persoBox_Text">{city}</p>
          </div>
        </div>

        <div className="bioBox">
          <p className="bioBox_Title">Biographie :</p>

          {textShow === false ? (
            <>
              <p className="bioBox_Little">{bio}</p>
              <button
                type="button"
                className="bioBox_Button"
                onClick={() => setTextShow(true)}
              >
                lire plus
              </button>
            </>
          ) : (
            <>
              <p className="bioBox_Big">{bio}</p>
              <button
                type="button"
                className="bioBox_Button"
                onClick={() => setTextShow(false)}
              >
                lire moins
              </button>
            </>
          )}
        </div>
      </div>

      <div>
        <p className="directorProfile_casting">{name} est célèbre pour :</p>
      </div>
    </div>
  );
}

DirectorProfile.propTypes = {
  picture: PropTypes.isRequired,
  name: PropTypes.isRequired,
  birthday: PropTypes.isRequired,
  alias: PropTypes.isRequired,
  city: PropTypes.isRequired,
  bio: PropTypes.isRequired,
  deathday: PropTypes.isRequired,
};

export default DirectorProfile;
