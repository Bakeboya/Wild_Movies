import React from "react";
import PropTypes from "prop-types";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      type="submit"
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        alt="slide Button"
        src={direction === "next" ? rightArrow : leftArrow}
      />
    </button>
  );
}

BtnSlider.propTypes = {
  direction: PropTypes.isRequired,
  moveSlide: PropTypes.isRequired,
};

export default BtnSlider;
