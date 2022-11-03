import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Slider({ poster }) {
  const sliderData = [];

  poster.map((element) => {
    return sliderData.push({
      backdrop_path: `https://image.tmdb.org/t/p/original${element.backdrop_path}`,
    });
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  const intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      {sliderData.map((slide, index) => {
        const id = `caroussel-${index}`;
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={id}
          >
            {index === currentSlide && (
              <img src={slide.backdrop_path} alt="" className="image" />
            )}
          </div>
        );
      })}
    </div>
  );
}

Slider.propTypes = {
  poster: PropTypes.isRequired,
};

export default Slider;
