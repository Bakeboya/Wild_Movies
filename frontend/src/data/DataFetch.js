import { useEffect, useState } from "react";
import axios from "axios";

export const useLanguage = () => {
  const [lang, setLang] = useState("en-US");
  return { lang, setLang };
};

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [resultsTotal, setResultsTotal] = useState([]);
  const [searchPage, setSearchPage] = useState(1);

  useEffect(() => {
    if (search !== "") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=ac1108de3648bb230bb19e261e8497cb&language=en-US&page=${searchPage}&include_adult=false&query=${search}`
        )
        .then((res) => {
          setResultsTotal(res.data);
          setResults(res.data.results);
        });
    }
  }, [search, searchPage]);
  return {
    search,
    setSearch,
    results,
    setResults,
    resultsTotal,
    searchPage,
    setSearchPage,
  };
};

export const useMoviesDiscover = () => {
  const [moviesDiscover, setMoviesDiscover] = useState([]);
  const [moviesDiscoverGenre, setMoviesDiscoverGenre] = useState("");
  const [moviesDiscoverRating, setMoviesDiscoverRating] = useState("");
  const [moviesDiscoverDecade, setMoviesDiscoverDecade] = useState("");
  const [moviesDiscoverDuration, setMoviesDiscoverDuration] = useState("");
  const [moviesDiscoverProvider, setMoviesDiscoverProvider] = useState("");
  const [moviesDiscoverCertification, setMoviesDiscoverCertification] =
    useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=ac1108de3648bb230bb19e261e8497cb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1${moviesDiscoverGenre}${moviesDiscoverRating}${moviesDiscoverDecade}${moviesDiscoverDuration}${moviesDiscoverProvider}${moviesDiscoverCertification}&vote_count.gte=10&with_watch_monetization_types=flatrate`
      )
      .then((res) => {
        setMoviesDiscover(res.data.results);
      });
  }, [
    moviesDiscoverGenre,
    moviesDiscoverRating,
    moviesDiscoverDecade,
    moviesDiscoverDuration,
    moviesDiscoverProvider,
    moviesDiscoverCertification,
  ]);
  return {
    moviesDiscover,
    moviesDiscoverGenre,
    setMoviesDiscoverGenre,
    moviesDiscoverRating,
    setMoviesDiscoverRating,
    moviesDiscoverDecade,
    setMoviesDiscoverDecade,
    moviesDiscoverDuration,
    setMoviesDiscoverDuration,
    moviesDiscoverProvider,
    setMoviesDiscoverProvider,
    moviesDiscoverCertification,
    setMoviesDiscoverCertification,
  };
};

export const useMoviesTop = () => {
  const { lang } = useLanguage();
  const [moviesTop, setMoviesTop] = useState([]);
  const [moviesTopPage, setMoviesTopPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=ac1108de3648bb230bb19e261e8497cb&language=${lang}&page=${moviesTopPage}`
      )
      .then((res) => {
        setMoviesTop(res.data.results);
      });
  }, [moviesTopPage, lang]);
  return { moviesTop, moviesTopPage, setMoviesTopPage };
};

export const useSeriesTop = () => {
  const { lang } = useLanguage();
  const [seriesTop, setSeriesTop] = useState([]);
  const [seriesTopPage, setSeriesTopPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=ac1108de3648bb230bb19e261e8497cb&language=${lang}&page=${seriesTopPage}`
      )
      .then((res) => {
        setSeriesTop(res.data.results);
      });
  }, [seriesTopPage, lang]);
  return { seriesTop, seriesTopPage, setSeriesTopPage };
};

export const useUpcoming = () => {
  const [moviesUpcomingPage, setMoviesUpcomingPage] = useState(1);
  const [moviesUpcoming, setMoviesUpcoming] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=ac1108de3648bb230bb19e261e8497cb&language=en-US&page=1`
      )
      .then((res) => {
        setMoviesUpcoming(res.data.results);
      });
  }, [moviesUpcomingPage]);
  return { moviesUpcoming, moviesUpcomingPage, setMoviesUpcomingPage };
};

export const useSeriesPopular = () => {
  const [seriesPopular, setSeriesPopular] = useState([]);
  useEffect(() => {
    axios
      .get(
        ` https://api.themoviedb.org/3/tv/popular?api_key=ac1108de3648bb230bb19e261e8497cb&language=en-US&page=1`
      )
      .then((res) => {
        setSeriesPopular(res.data.results);
      });
  }, []);
  return { seriesPopular };
};

export const useMoviesCategories = () => {
  const [moviesCategories, setMoviesCategories] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=ac1108de3648bb230bb19e261e8497cb&language=en-US
`
      )
      .then((res) => {
        setMoviesCategories(res.data.genres);
      });
  }, []);
  return { moviesCategories, setMoviesCategories };
};

export const useSeriesCategories = () => {
  const [seriesCategories, setSeriesCategories] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=ac1108de3648bb230bb19e261e8497cb&language=en-US
    `
      )
      .then((res) => {
        setSeriesCategories(res.data.results);
      });
  }, []);
  return { seriesCategories, setSeriesCategories };
};
