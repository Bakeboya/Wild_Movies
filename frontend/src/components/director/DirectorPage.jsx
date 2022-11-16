import React, { useEffect, useState } from "react";
import axios from "axios";
import DirectorProfile from "./DirectorProfile";
import DirectorMoviesCard from "./DirectorMoviesCard";
import BtnSlider from "./BtnSlider";
import Navbar from "@components/navbar/Navbar";

function DirectorPage() {
  const [directorInfo, setDirectorInfo] = useState({});
  const [directorMovies, setDirectorMovies] = useState();
  const [slideIndex, setSlideIndex] = useState(1);
  const [directorDataCut, setDirectorDataCut] = useState([]);

  const idDirector = 1245733;

  useEffect(() => {
    if (directorMovies === undefined) {
      axios
        .get(
          `https://api.themoviedb.org/3/person/${idDirector}?api_key=${import.meta.env.VITE_API_KEY
          }&language=en-US`
        )
        .then((res) => {
          setDirectorInfo(res.data);
        });

      axios
        .get(
          `https://api.themoviedb.org/3/person/${idDirector}/combined_credits?api_key=${import.meta.env.VITE_API_KEY
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
          original_title: element.original_title,
          poster_path: `https://image.tmdb.org/t/p/w185${element.poster_path}`,
        });
      });

      setDirectorDataCut(directorData && directorData.slice(0, 19));
    }
  }, [directorMovies]);

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
    <>
      <Navbar />
      <div className="directorPage">
        <div>
          {directorInfo !== 0 && (
            <DirectorProfile
              picture={directorInfo.profile_path}
              name={directorInfo.name}
              birthday={directorInfo.birthday}
              alias={directorInfo.also_known_as}
              city={directorInfo.place_of_birth}
              bio={directorInfo.biography}
            />
          )}
        </div>

        <div className="container_slider">
          {directorDataCut !== 0 &&
            directorDataCut.map((infos, index) => (
              <DirectorMoviesCard
                key={infos.id}
                className={
                  slideIndex === index + 1
                    ? "container_slider_slide active-anim"
                    : "container_slider_slide"
                }
                movieTitle={infos.original_title}
                movieImg={infos.poster_path}
              />
            ))}

          <BtnSlider moveSlide={nextSlide} direction="next" />
          <BtnSlider moveSlide={prevSlide} direction="prev" />
        </div>
      </div></>
  );
}

export default DirectorPage;
