import React from "react";
import PropTypes from "prop-types";

function ButtonActor({ isCut, toggleCast, length }) {
  const btnChoice = (cast) => {
    let temp = "";
    if (cast <= 7) {
      temp = "hide";
    } else if (cast >= 8) {
      temp = "show";
    }
    return temp;
  };

  return (
    <div className={btnChoice(length)}>
      <button id="btnCrew" type="button" onClick={toggleCast}>
        {isCut ? "Voir Plus" : "Voir Moins"}
      </button>
    </div>
  );
}

ButtonActor.propTypes = {
  isCut: PropTypes.bool.isRequired,
  toggleCast: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};

export default ButtonActor;
