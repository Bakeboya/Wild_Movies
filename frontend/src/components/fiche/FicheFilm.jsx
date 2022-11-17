import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "@components/navbar/Navbar";
import CardImg from "./CardImg";
import CardText from "./CardText";

const certification = (certi) => {
  let result = "";
  if (certi === "tv") {
    result = "content_ratings";
  } else if (certi === "movie") {
    result = "release_dates";
  }
  return result;
};

const releaseDateSet = (a) => {
  let results = "";
  if (a.release_date !== undefined) {
    results = a.release_date;
  } else if (a.first_air_date !== undefined) {
    results = a.first_air_date;
  }
  return results;
};

function FicheFilm() {
  const { id, type } = useParams();
  const [film, setFilm] = useState({});
  const [filmCrew, setFilmCrew] = useState({});
  const [watchProviders, setWatchProviders] = useState({});
  const [preview, setPreview] = useState({});
  const [pegi, setPegi] = useState({});

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        setPreview(res.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        setFilm(res.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        setFilmCrew(res.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}/watch/providers?api_key=${import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        setWatchProviders(res.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/${type}/${id}/${certification(
          type
        )}?api_key=${import.meta.env.VITE_API_KEY}&language=fr`
      )
      .then((res) => {
        setPegi(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="ficheFilm">
        {watchProviders && watchProviders.results && film && (
          <CardImg
            posterPath={film.poster_path}
            providers={watchProviders.results}
          />
        )}

        {film && preview && preview.results && pegi && pegi.results && (
          <CardText
            releaseDate={releaseDateSet(film)}
            genres={film.genres}
            runtime={film.runtime}
            voteAverage={film.vote_average}
            overview={film.overview}
            title={film.title || film.name || film.original_title}
            cast={filmCrew.cast}
            preview={preview.results}
            pegi={pegi.results}
            type={type}
            numOfEpisodes={film.number_of_episodes}
            numOfSeasons={film.number_of_seasons}
            crew={filmCrew.crew}
          />
        )}
      </div>
    </div>
  );
}

export default FicheFilm;
