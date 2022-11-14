import React, { useState } from "react";
import PropTypes from "prop-types";
import imgTemp from "@assets/fiche/imgTemp.webp";
import ButtonActor from "./ButtonActor";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function Casting({ cast }) {
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

  return (
    <div className="casting">
      <div className="synopsisFilm">
        <h3>Casting</h3>
      </div>
      <div className="actorCard">
        <div className="actorFilm">

          {cast &&
            (isCut ? castCut : cast).map((acteur) => (
              <div className="actors">
                <Link to={`/actor/${acteur.id}`}>
                  <img
                    src={
                      acteur.profile_path != null
                        ? `https://image.tmdb.org/t/p/w200/${acteur.profile_path}`
                        : imgTemp
                    }
                    alt={acteur.name}
                  />
                  <div>
                    <p className="actorName">{acteur.name}</p>
                    <p className="actorCharacter">{acteur.character}</p>
                  </div></Link>
              </div>
            ))}
        </div>

        <ButtonActor
          isCut={isCut}
          toggleCast={toggleCast}
          castCut={castCut}
          length={length(castCut, cast)}
        />
      </div>
    </div>
  );
}

Casting.propTypes = {
  cast: PropTypes.shape(PropTypes.string).isRequired,
};

export default Casting;
