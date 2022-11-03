import React from "react";
import famille from "@assets/100.svg";
import douze from "@assets/200.svg";
import dix from "@assets/500.svg";
import seize from "@assets/300.svg";
import adult from "@assets/400.svg";
import PropTypes from "prop-types";

function Pegi({ pegi }) {
  const newPegi =
    pegi &&
    pegi
      .filter((pegis) => pegis.iso_3166_1.includes("FR"))
      .map((x) => x.release_dates);

  const pegiChoice = (num) => {
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

  return (
    <div className="pegi">
      <img src={pegiChoice(newPegi[0])} alt="logo pegi" />
    </div>
  );
}

Pegi.propTypes = {
  pegi: PropTypes.shape(PropTypes.string, PropTypes.number).isRequired,
};

export default Pegi;
