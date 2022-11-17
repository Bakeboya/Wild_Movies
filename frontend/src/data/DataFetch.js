import { useEffect, useState } from "react";
import axios from "axios";

export const useLanguage = () => {
  const [lang, setLang] = useState("fr-FR");
  return { lang, setLang };
};

export const useSearch = () => {
  const { lang } = useLanguage();
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState(searchText);
  const [results, setResults] = useState([]);
  const [resultsTotal, setResultsTotal] = useState("");
  const [searchPage, setSearchPage] = useState(1);

  const getSearch = () => {
    const source = axios.CancelToken.source();

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=${lang}&page=${searchPage}&include_adult=false&query=${search}`,
        { cancelToken: source.token }
      )
      .then((res) => {
        setResultsTotal(res.data);
        setResults(res.data.results);
        console.log(`data search: ${search}`);
      });

    return () => {
      source.cancel("Component got unmounted");
    };
  };

  useEffect(() => {
    getSearch();
  }, [search, searchPage, setSearchPage, lang]);

  return {
    searchText,
    setSearchText,
    search,
    setSearch,
    results,
    setResults,
    resultsTotal,
    searchPage,
    setSearchPage,
  };
};

export const useDiscover = () => {
  const { lang } = useLanguage();
  const [sorting, setSorting] = useState("popularity.desc");
  const [discover, setDiscover] = useState([]);
  const [discoverGenre, setDiscoverGenre] = useState("");
  const [discoverRating, setDiscoverRating] = useState("");
  const [discoverDecade, setDiscoverDecade] = useState("");
  const [discoverDuration, setDiscoverDuration] = useState("");
  const [discoverProvider, setDiscoverProvider] = useState("");
  const [discoverCertification, setDiscoverCertification] = useState("");
  const [filtersTotal, setFiltersTotal] = useState("");
  const [filtersPage, setFiltersPage] = useState(1);
  const [type, setType] = useState("");

  const getDiscover = () => {
    const source = axios.CancelToken.source();

    axios
      .get(
        `https://api.themoviedb.org/3/discover/${type}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=${lang}&sort_by=${sorting}&include_adult=false&include_video=false&page=${filtersPage}${discoverGenre}${discoverRating}${discoverDecade}${discoverDuration}${discoverProvider}${discoverCertification}&vote_count.gte=10&with_watch_monetization_types=flatrate`,
        { cancelToken: source.token }
      )
      .then((res) => {
        setFiltersTotal(res.data);
        setDiscover(res.data.results);
      });

    return () => {
      source.cancel("Component got unmounted");
    };
  };

  useEffect(() => {
    getDiscover();
  }, [
    type,
    sorting,
    filtersPage,
    discoverGenre,
    discoverRating,
    discoverDecade,
    discoverDuration,
    discoverProvider,
    discoverCertification,
  ]);

  return {
    type,
    setType,
    sorting,
    setSorting,
    filtersTotal,
    filtersPage,
    setFiltersPage,
    discover,
    discoverGenre,
    setDiscoverGenre,
    discoverRating,
    setDiscoverRating,
    discoverDecade,
    setDiscoverDecade,
    discoverDuration,
    setDiscoverDuration,
    discoverProvider,
    setDiscoverProvider,
    discoverCertification,
    setDiscoverCertification,
  };
};

export const useMoviesPopular = () => {
  const { lang } = useLanguage();
  const [moviesPopular, setMoviesPopular] = useState([]);
  const [moviesPopularPage, setMoviesPopularPage] = useState(1);

  const getMoviesPopular = () => {
    const source = axios.CancelToken.source();

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=${lang}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${moviesPopularPage}&vote_count.gte=10&with_watch_monetization_types=flatrate`,
        { cancelToken: source.token }
      )
      .then((res) => {
        setMoviesPopular(res.data.results);
      });

    return () => {
      source.cancel("Component got unmounted");
    };
  };

  useEffect(() => {
    getMoviesPopular();
  }, []);

  return { moviesPopular };
};

export const useTrending = () => {
  const { lang } = useLanguage();
  const [trending, setTrending] = useState([]);
  const [trendingTime, setTrendingTime] = useState("day");

  const getTrending = () => {
    const source = axios.CancelToken.source();

    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/${trendingTime}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=${lang}`,
        { cancelToken: source.token }
      )
      .then((res) => {
        setTrending(res.data.results);
      });

    return () => {
      source.cancel("Component got unmounted");
    };
  };

  useEffect(() => {
    getTrending();
  }, [trendingTime]);

  return { trending, trendingTime, setTrendingTime };
};

export const useMoviesTop = () => {
  const { lang } = useLanguage();
  const [moviesTop, setMoviesTop] = useState([]);
  const [moviesTopPage, setMoviesTopPage] = useState(1);

  const getMoviesTop = () => {
    const source = axios.CancelToken.source();

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=${lang}&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${moviesTopPage}&vote_count.gte=300&with_watch_monetization_types=flatrate`,
        { cancelToken: source.token }
      )
      .then((res) => {
        setMoviesTop(res.data.results);
      });

    return () => {
      source.cancel("Component got unmounted");
    };
  };

  useEffect(() => {
    getMoviesTop();
  }, [moviesTopPage, lang]);

  return { moviesTop, moviesTopPage, setMoviesTopPage };
};

export const useSeriesTop = () => {
  const { lang } = useLanguage();
  const [seriesTop, setSeriesTop] = useState([]);
  const [seriesTopPage, setSeriesTopPage] = useState(1);

  const getSeriesTop = () => {
    const source = axios.CancelToken.source();

    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=${lang}&sort_by=vote_average.desc&page=${seriesTopPage}&vote_count.gte=100&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`,
        { cancelToken: source.token }
      )
      .then((res) => {
        setSeriesTop(res.data.results);
      });

    return () => {
      source.cancel("Component got unmounted");
    };
  };

  useEffect(() => {
    getSeriesTop();
  }, [seriesTopPage, lang]);

  return { seriesTop, seriesTopPage, setSeriesTopPage };
};

export const useUpcoming = () => {
  const { lang } = useLanguage();
  const [moviesUpcomingPage, setMoviesUpcomingPage] = useState(1);
  const [moviesUpcoming, setMoviesUpcoming] = useState([]);

  const getUpcoming = () => {
    const source = axios.CancelToken.source();

    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=${lang}&page=1`,
        { cancelToken: source.token }
      )
      .then((res) => {
        setMoviesUpcoming(res.data.results);
      });

    return () => {
      source.cancel("Component got unmounted");
    };
  };

  useEffect(() => {
    getUpcoming();
  }, [moviesUpcomingPage]);

  return { moviesUpcoming, moviesUpcomingPage, setMoviesUpcomingPage };
};

export const useSeriesPopular = () => {
  const { lang } = useLanguage();
  const [seriesPopular, setSeriesPopular] = useState([]);

  const getSeriesPopular = () => {
    const source = axios.CancelToken.source();

    axios
      .get(
        ` https://api.themoviedb.org/3/tv/popular?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=${lang}&page=1`,
        { cancelToken: source.token }
      )
      .then((res) => {
        setSeriesPopular(res.data.results);
      });

    return () => {
      source.cancel("Component got unmounted");
    };
  };

  useEffect(() => {
    getSeriesPopular();
  }, []);

  return { seriesPopular };
};
