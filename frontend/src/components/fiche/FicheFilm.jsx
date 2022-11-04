import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "@components/navbar/Navbar";
import Footer from "@components/footer/Footer";
import CardImg from "./CardImg";
import CardText from "./CardText";

function FicheFilm() {
  const { id } = useParams();

  const [film, setFilm] = useState({});
  const [filmCrew, setFilmCrew] = useState({});
  const [watchProviders, setWatchProviders] = useState({});
  const [preview, setPreview] = useState({});
  const [pegi, setPegi] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        setPreview(res.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        setFilm(res.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        setFilmCrew(res.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        setWatchProviders(res.data);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=fr`
      )
      .then((res) => {
        setPegi(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
          <div className="spinner" />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="ficheFilm">
            {watchProviders && watchProviders.results && film && (
              <CardImg
                posterPath={film.poster_path}
                originalTitle={film.original_title}
                providers={watchProviders.results}
              />
            )}

            {film && preview && preview.results && pegi && pegi.results && (
              <CardText
                releaseDate={film.release_date}
                genres={film.genres}
                runtime={film.runtime}
                voteAverage={film.vote_average}
                overview={film.overview}
                title={film.title}
                cast={filmCrew.cast}
                preview={preview.results}
                pegi={pegi.results}
              />
            )}
          </div>
          <Footer />
        </>
      )}
      ;
    </div>
  );
}

export default FicheFilm;
