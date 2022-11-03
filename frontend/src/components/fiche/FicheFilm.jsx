import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardImg from "./CardImg";
import CardText from "./CardText";

function FicheFilm() {
  const { name } = useParams();

  const [film, setFilm] = useState({});
  const [filmCrew, setFilmCrew] = useState({});
  const [watchProviders, setWatchProviders] = useState({});
  const [preview, setPreview] = useState({});
  const [pegi, setPegi] = useState({});

  const idFilm = 550;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idFilm}/videos?api_key=ac1108de3648bb230bb19e261e8497cb&language=fr`
      )
      .then((res) => {
        setPreview(res.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idFilm}?api_key=ac1108de3648bb230bb19e261e8497cb&language=fr`
      )
      .then((res) => {
        setFilm(res.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idFilm}/credits?api_key=ac1108de3648bb230bb19e261e8497cb&language=fr`
      )
      .then((res) => {
        setFilmCrew(res.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${idFilm}/watch/providers?api_key=ac1108de3648bb230bb19e261e8497cb&language=fr`
      )
      .then((res) => {
        setWatchProviders(res.data);
      });

    axios.get(`https://api.themoviedb.org/3/movie/${idFilm}/release_dates?api_key=ac1108de3648bb230bb19e261e8497cb&language=fr`)
      .then((res) => {
        setPegi(res.data);
      });
  }, []);

  return (
    <div className="ficheFilm">
      {watchProviders && watchProviders.results && film && (
        <CardImg
          posterPath={film.poster_path || ""}
          originalTitle={film.original_title || ""}
          providers={watchProviders.results || {}}
        />
      )}

      {film && preview && preview.results && pegi && pegi.results && (
        <CardText
          releaseDate={film.release_date}
          genres={film.genres}
          runtime={film.runtime}
          voteAverage={film.vote_average}
          overview={film.overview}
          title={film.title || ""}
          cast={filmCrew.cast}
          preview={preview.results}
          pegi={pegi.results}
        />
      )}
    </div>
  );
}

export default FicheFilm;
