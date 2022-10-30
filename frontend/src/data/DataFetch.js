import { useEffect, useState } from "react";
import axios from "axios";

export const useLanguage = () => {
  const [lang, setLang] = useState("fr-FR");
  return { lang, setLang };
};

export const useSearch = () => {
  const { lang } = useLanguage();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [resultsTotal, setResultsTotal] = useState("");
  const [searchPage, setSearchPage] = useState(1);

  useEffect(() => {
    if (search !== "") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=ac1108de3648bb230bb19e261e8497cb&language=${lang}&page=${searchPage}&include_adult=false&query=${search}`
        )
        .then((res) => {
          setResultsTotal(res.data);
          setResults(res.data.results);
        });
    }
  }, [search, searchPage, lang]);
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

export const useMoviesPopular = () => {
  const { lang } = useLanguage();
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesPopularGenre, setMoviesPopularGenre] = useState("");
  const [moviesPopularRating, setMoviesPopularRating] = useState("");
  const [moviesPopularDecade, setMoviesPopularDecade] = useState("");
  const [moviesPopularDuration, setMoviesPopularDuration] = useState("");
  const [moviesPopularProvider, setMoviesPopularProvider] = useState("");
  const [moviesPopularCertification, setMoviesPopularCertification] =
    useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=ac1108de3648bb230bb19e261e8497cb&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1${moviesPopularGenre}${moviesPopularRating}${moviesPopularDecade}${moviesPopularDuration}${moviesPopularProvider}${moviesPopularCertification}&vote_count.gte=10&with_watch_monetization_types=flatrate`
      )
      .then((res) => {
        setMoviesPopular(res.data.results);
      });
  }, [
    moviesPopularGenre,
    moviesPopularRating,
    moviesPopularDecade,
    moviesPopularDuration,
    moviesPopularProvider,
    moviesPopularCertification,
  ]);
  return {
    moviesPopular,
    moviesPopularGenre,
    setMoviesPopularGenre,
    moviesPopularRating,
    setMoviesPopularRating,
    moviesPopularDecade,
    setMoviesPopularDecade,
    moviesPopularDuration,
    setMoviesPopularDuration,
    moviesPopularProvider,
    setMoviesPopularProvider,
    moviesPopularCertification,
    setMoviesPopularCertification,
  };
};

export const useTrending = () => {
  const [trending, setTrending] = useState([]);
  const [trendingTime, setTrendingTime] = useState("day");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/${trendingTime}?api_key=ac1108de3648bb230bb19e261e8497cb`
      )
      .then((res) => {
        setTrending(res.data.results);
      });
  }, [trendingTime]);
  return { trending, trendingTime, setTrendingTime };
};

export const useMoviesTop = () => {
  const { lang } = useLanguage();
  const [moviesTop, setMoviesTop] = useState([]);
  const [moviesTopPage, setMoviesTopPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=ac1108de3648bb230bb19e261e8497cb&language=${lang}&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${moviesTopPage}&vote_count.gte=300&with_watch_monetization_types=flatrate`
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
        `https://api.themoviedb.org/3/discover/tv?api_key=ac1108de3648bb230bb19e261e8497cb&language=${lang}&sort_by=vote_average.desc&page=${seriesTopPage}&vote_count.gte=100&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`
      )
      .then((res) => {
        setSeriesTop(res.data.results);
      });
  }, [seriesTopPage, lang]);
  return { seriesTop, seriesTopPage, setSeriesTopPage };
};

export const useUpcoming = () => {
  const { lang } = useLanguage();
  const [moviesUpcomingPage, setMoviesUpcomingPage] = useState(1);
  const [moviesUpcoming, setMoviesUpcoming] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=ac1108de3648bb230bb19e261e8497cb&language=${lang}&page=1`
      )
      .then((res) => {
        setMoviesUpcoming(res.data.results);
      });
  }, [moviesUpcomingPage]);
  return { moviesUpcoming, moviesUpcomingPage, setMoviesUpcomingPage };
};

export const useSeriesPopular = () => {
  const { lang } = useLanguage();
  const [seriesPopular, setSeriesPopular] = useState([]);
  useEffect(() => {
    axios
      .get(
        ` https://api.themoviedb.org/3/tv/popular?api_key=ac1108de3648bb230bb19e261e8497cb&language=${lang}&page=1`
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
