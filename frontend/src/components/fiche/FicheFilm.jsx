import React, { useEffect, useState } from "react";
import axios from "axios";
import CardImg from "./CardImg";
import CardText from "./CardText";

function FicheFilm() {
  const [film, setFilm] = useState([]);
  const [filmCrew, setFilmCrew] = useState([]);
  const [watchProviders, setWatchProviders] = useState([]);

  const idFilm = 155;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idFilm}?api_key=ac1108de3648bb230bb19e261e8497cb&language=fr`
      )
      .then((res) => {
        setFilm(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idFilm}/credits?api_key=ac1108de3648bb230bb19e261e8497cb&language=fr`
      )
      .then((res) => {
        setFilmCrew(res.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idFilm}/watch/providers?api_key=ac1108de3648bb230bb19e261e8497cb&language=fr`
      )
      .then((res) => {
        setWatchProviders(res.data);
      });
  }, []);

  return (
    <div className="ficheFilm">
      <CardImg
        posterPath={film.poster_path}
        originalTitle={film.original_title}
        watchProviders={watchProviders}
      />

      <CardText
        releaseDate={film.release_date}
        genres={film.genres}
        runtime={film.runtime}
        voteAverage={film.vote_average}
        overview={film.overview}
        title={film.title}
        cast={filmCrew.cast}
      />
    </div>
  );
}

export default FicheFilm;
