import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CastingCarouCard from "./CastingCarouCard";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 900 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function CastingCarou({ cast, link }) {
  return (
    <div className="castingCarou">
      <Carousel
        containerClass="castingCarou_carousel"
        responsive={responsive}
        infinite
      >
        {cast &&
          cast.map((infos) => {
            return (
              <div key={infos.id}>
                <CastingCarouCard
                  movieTitle={infos.name}
                  movieImg={infos.profile_path}
                  link={link}
                  id={infos.id}
                  job={infos.character || infos.job}
                />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
}

CastingCarou.propTypes = {
  link: PropTypes.string.isRequired,
  cast: PropTypes.shape(PropTypes.number, PropTypes.string).isRequired,
};

export default CastingCarou;
