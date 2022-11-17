import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import DirectorMoviesCard from "./DirectorMoviesCard";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 375 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 375, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function DirectorMovies({ idDirector }) {
  const [directorDataCut, setDirectorDataCut] = useState([]);

  const getDirectorMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/person/${idDirector}/combined_credits?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US`
      )
      .then((res) => {
        const directorData = [];

        res.data.cast.map((element) => {
          return directorData.push({
            id: element.id,
            media_type: element.media_type,
            release_date: element.release_date,
            original_title: element.original_title,
            poster_path: `https://image.tmdb.org/t/p/w500${element.poster_path}`,
          });
        });

        setDirectorDataCut(directorData && directorData.slice(0, 19));
      });
  };

  useEffect(() => {
    getDirectorMovies();
  }, []);

  return (
    <div className="directorMovies">
      {directorDataCut.length > 1 && (
        <Carousel
          containerClass="directorMovies_carousel"
          responsive={responsive}
          infinite
        >
          {directorDataCut.map((infos) => {
            return (
              <div key={infos.id}>
                <DirectorMoviesCard
                  movieTitle={infos.original_title}
                  movieImg={infos.poster_path}
                  id={infos.id}
                  date={infos.release_date}
                  type={infos.media_type}
                />
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
}

DirectorMovies.propTypes = {
  idDirector: PropTypes.isRequired,
};

export default DirectorMovies;
