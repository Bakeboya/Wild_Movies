import React from "react";
import famille from "@assets/fiche/famille.svg";
import douze from "@assets/fiche/douze.svg";
import seize from "@assets/fiche/seize.svg";
import adult from "@assets/fiche/adult.svg";
import dix from "@assets/fiche/dix.svg";
import nullos from "@assets/fiche/null.svg";
import PropTypes from "prop-types";

function Pegi({ pegi, type }) {
  const newPegiFilm =
    type === "movie"
      ? pegi
          .filter((pegis) => pegis.iso_3166_1.includes("FR"))
          .map((x) => x.release_dates)
      : pegi
          .filter((pegis) => pegis.iso_3166_1.includes("FR"))
          .map((x) => x.rating);

  const pegiChoice = (num) => {
    if (num === undefined) {
      return nullos;
    }
    if (num[0].certification === "U") {
      return famille;
    }
    if (num[0].certification === "10") {
      return dix;
    }
    if (num[0].certification === "12") {
      return douze;
    }
    if (num[0].certification === "16") {
      return seize;
    }
    if (num[0].certification === "18") {
      return adult;
    }
    return famille;
  };
  const pegiChoiceSerie = (num) => {
    if (num === undefined) {
      return nullos;
    }
    if (num === "U") {
      return famille;
    }
    if (num === "10") {
      return dix;
    }
    if (num === "12") {
      return douze;
    }
    if (num === "16") {
      return seize;
    }
    if (num === "18") {
      return adult;
    }
    return famille;
  };

  return (
    <div className="pegi">
      {type === "tv" ? (
        <img src={pegiChoiceSerie(newPegiFilm[0])} alt="attente" />
      ) : (
        <img src={pegiChoice(newPegiFilm[0])} alt="logo pegi" />
      )}
    </div>
  );
}

Pegi.propTypes = {
  pegi: PropTypes.shape(PropTypes.string, PropTypes.number).isRequired,
  type: PropTypes.string.isRequired,
};

export default Pegi;
