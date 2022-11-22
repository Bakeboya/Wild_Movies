import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import C from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 375 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 375, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function Slider({ poster }) {
  const Carousel = C.default ? C.default : C;
  const sliderData = [];

  poster.map((element) => {
    return sliderData.push({
      backdrop_path: `https://image.tmdb.org/t/p/w1280${element.backdrop_path}`,
    });
  });

  return (
    <div className="slider">
      {sliderData.length > 1 && (
        <Carousel
          containerClass="slider_carousel"
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
        >
          {sliderData.map((infos) => {
            return (
              <img
                key={infos.id}
                className="slider_carousel_img"
                src={infos.backdrop_path}
                alt=""
              />
            );
          })}
        </Carousel>
      )}
    </div>
  );
}

Slider.propTypes = {
  poster: PropTypes.isRequired,
};

export default Slider;
