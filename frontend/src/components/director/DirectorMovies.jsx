import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BtnSlider from "./BtnSlider";
import DirectorMoviesCard from "./DirectorMoviesCard";

function DirectorMovies({ idDirector }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [directorMovies, setDirectorMovies] = useState();
  const [directorDataCut, setDirectorDataCut] = useState([]);

  useEffect(() => {
    setDirectorMovies();
    if (directorMovies === undefined) {
      axios
        .get(
          `https://api.themoviedb.org/3/person/${idDirector}/combined_credits?api_key=${
            import.meta.env.VITE_API_KEY
          }&language=en-US`
        )
        .then((res) => {
          setDirectorMovies(res.data);
        });
    }

    if (directorMovies !== undefined) {
      const directorData = [];

      directorMovies.cast.map((element) => {
        return directorData.push({
          id: element.id,
          media_type: element.media_type,
          release_date: element.release_date,
          original_title: element.original_title,
          poster_path: `https://image.tmdb.org/t/p/w185${element.poster_path}`,
        });
      });

      setDirectorDataCut(directorData && directorData.slice(0, 19));
    }
  }, [directorMovies, idDirector]);

  const nextSlide = () => {
    if (slideIndex !== directorDataCut.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === directorDataCut.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(directorDataCut.length);
    }
  };

  return (
    <div className="container_slider">
      {directorDataCut.map((infos, index) => {
        return (
          <div
            key={infos.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            {index === slideIndex && (
              <DirectorMoviesCard
                movieTitle={infos.original_title}
                movieImg={infos.poster_path}
                id={infos.id}
                date={infos.release_date}
                type={infos.media_type}
              />
            )}
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />
    </div>
  );
}

DirectorMovies.propTypes = {
  idDirector: PropTypes.isRequired,
};

export default DirectorMovies;
