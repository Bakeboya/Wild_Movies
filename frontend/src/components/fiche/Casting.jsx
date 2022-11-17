import React, { useState } from "react";
import PropTypes from "prop-types";
import imgTemp from "@assets/fiche/ImgTemp.png";
import { useParams, Link } from "react-router-dom";
import ButtonActor from "./ButtonActor";

function Casting({ cast, link }) {
  const [isCut, setIsCut] = useState(true);

  const { id } = useParams();

  const toggleCast = () => {
    setIsCut(!isCut);
  };

  const castCut = cast && cast.slice(0, 8);

  const length = (a, b) => {
    let c = 0;
    if (a.length >= b.length) {
      c = a.length;
    } else {
      c = b.length;
    }
    return c;
  };

  const lengthFinal = cast && length(castCut, cast);

  return (
    <div className="casting">
      <div className="actorCard">
        <div className="actorFilm">
          {cast &&
            (isCut ? castCut : cast).map((acteur) => (
              <div className="actors">
                <Link to={link + acteur.id}>
                  <div className="actorImgDiv">
                    <img
                      src={
                        acteur.profile_path != null
                          ? `https://image.tmdb.org/t/p/w200/${acteur.profile_path}`
                          : imgTemp
                      }
                      alt={acteur.name}
                    />
                  </div>
                  <div className="divChara">
                    <p className="actorName">{acteur.name}</p>
                    <p className="actorCharacter">
                      {acteur.character || acteur.job}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>

        <ButtonActor
          isCut={isCut}
          toggleCast={toggleCast}
          castCut={castCut}
          length={lengthFinal}
        />
      </div>
    </div>
  );
}

Casting.propTypes = {
  cast: PropTypes.shape(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
};

export default Casting;
