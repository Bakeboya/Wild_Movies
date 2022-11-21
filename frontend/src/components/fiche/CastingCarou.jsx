import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import C from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CastingCarouCard from "./CastingCarouCard";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 430 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 430, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function CastingCarou({ cast, link }) {
  const Carousel = C.default ? C.default : C;

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
