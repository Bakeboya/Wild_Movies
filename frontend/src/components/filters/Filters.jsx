import React, { useState } from "react";
import Select from "react-select";
import MultiRangeSlider from "multi-range-slider-react";
import ReactPaginate from "react-paginate";
import ContentCard from "./components/ContentCard";
import ContentList from "./components/ContentList";
import {
  useSearch,
  useUpcoming,
  useMoviesTop,
  useSeriesTop,
  useSeriesPopular,
  useMoviesPopular,
  useMoviesCategories,
  useSeriesCategories,
  useTrending,
} from "../../data/DataFetch";
import {
  genreOptions,
  providerOptions,
  certificationOptions,
} from "../../data/FiltersArrays";
import ButtonsChoice from "./components/ButtonsChoice";

export default function Filters() {
  const { moviesCategories } = useMoviesCategories();
  const { seriesCategories } = useSeriesCategories();
  const {
    search,
    setSearch,
    results,
    setResults,
    resultsTotal,
    searchPage,
    setSearchPage,
  } = useSearch();
  const { moviesTop } = useMoviesTop();
  const {
    moviesPopular,
    moviesPopularGenre,
    setMoviesPopularGenre,
    setMoviesPopularRating,
    setMoviesPopularDecade,
    setMoviesPopularDuration,
    setMoviesPopularProvider,
    setMoviesPopularCertification,
  } = useMoviesPopular();
  const { moviesUpcoming } = useUpcoming();
  const { trending, trendingTime, setTrendingTime } = useTrending();
  const { seriesTop } = useSeriesTop();
  const { seriesPopular } = useSeriesPopular();

  const handleSelectGenres = (option) => {
    let genresQuery = "&with_genres=";
    option.map((o, i) => {
      genresQuery += o.id;
      if (i < option.length) {
        genresQuery += ",";
      }
      return setMoviesPopularGenre(genresQuery);
    });
    if (option.length === 0) {
      setMoviesPopularGenre("");
    }
  };

  const handleSelectProvider = (option) => {
    let providersQuery = "&watch_region=FR&with_watch_providers=";
    option.map((o, i) => {
      providersQuery += o.id;
      if (i < option.length) {
        providersQuery += ",";
      }
      return setMoviesPopularProvider(providersQuery);
    });
    if (option.length === 0) {
      setMoviesPopularProvider("");
    }
  };

  const handleSelectCertification = (option) => {
    let certificationsQuery = "&certification_country=FR&certification=";
    if (option !== null) {
      certificationsQuery += option.id;
      setMoviesPopularCertification(`${certificationsQuery}`);
    } else if (option === null) {
      setMoviesPopularCertification("");
    }
  };

  const [minRatingValue, setMinRatingValue] = useState(0);
  const [maxRatingValue, setMaxRatingValue] = useState(10);
  const handleRatingInput = (e) => {
    let ratingMinQuery = "&vote_average.gte=";
    let ratingMaxQuery = "&vote_average.lte=";
    setMinRatingValue(e.minValue);
    setMaxRatingValue(e.maxValue);
    ratingMaxQuery += maxRatingValue;
    ratingMinQuery += minRatingValue;
    setMoviesPopularRating(`${ratingMinQuery}${ratingMaxQuery}`);
  };

  const [minDecadeValue, setMinDecadeValue] = useState(1900);
  const [maxDecadeValue, setMaxDecadeValue] = useState(2030);
  const handleDecadeInput = (e) => {
    let decadeMinQuery = "&release_date.gte=";
    let decadeMaxQuery = "&release_date.lte=";
    setMinDecadeValue(e.minValue);
    setMaxDecadeValue(e.maxValue);
    decadeMaxQuery += maxDecadeValue;
    decadeMinQuery += minDecadeValue;
    setMoviesPopularDecade(`${decadeMinQuery}${decadeMaxQuery}`);
  };

  const [minDurationValue, setMinDurationValue] = useState(0);
  const [maxDurationValue, setMaxDurationValue] = useState(300);
  const handleDurationInput = (e) => {
    let durationMinQuery = "&with_runtime.gte=";
    let durationMaxQuery = "&with_runtime.lte=";
    setMinDurationValue(e.minValue);
    setMaxDurationValue(e.maxValue);
    durationMaxQuery += maxDurationValue;
    durationMinQuery += minDurationValue;
    setMoviesPopularDuration(`${durationMinQuery}${durationMaxQuery}`);
  };

  const handleSearchPage = (data) => {
    window.scrollTo(0, 0);
    setSearchPage(data.selected + 1);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#F5F5F5",
      border: state.isFocused ? "1px solid #E66D38" : "1px solid #38383d",
      boxShadow: state.isFocused ? "0 0 0 1 #E66D38" : "none",
      "&:hover": {
        border: state.isFocused ? "1px solid #E66D38" : "1px solid #38383d",
        boxShadow: state.isFocused ? "0 0 0 1 #E66D38" : "none",
      },
    }),
  };

  const moviesTopId = moviesTop.map((mt) => mt.id);

  return (
    <main className="filters">
      {/* <section className="filtersContainer">
        <div className="searchContainer">
          <input
            type="text"
            name="search"
            className="searchBar"
            id="searchBar"
            placeholder="Recherche"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="filtersInner">
          <Select
            isMulti
            isClearable
            closeMenuOnSelect={false}
            name="genres"
            options={genreOptions}
            className="react-select-container"
            classNamePrefix="react-select"
            styles={customStyles}
            placeholder="Genre"
            getOptionValue={(option) => option.id}
            onChange={(option) => handleSelectGenres(option)}
          />
          <Select
            isMulti
            isClearable
            closeMenuOnSelect={false}
            name="providers"
            options={providerOptions}
            className="react-select-container"
            classNamePrefix="react-select"
            styles={customStyles}
            placeholder="Plateforme"
            getOptionValue={(option) => option.id}
            onChange={(option) => handleSelectProvider(option)}
          />
          <Select
            isClearable
            closeMenuOnSelect={false}
            name="certifications"
            options={certificationOptions}
            className="react-select-container"
            classNamePrefix="react-select"
            styles={customStyles}
            placeholder="Age"
            getOptionValue={(option) => option.id}
            onChange={(option) => handleSelectCertification(option)}
          />
          <div>
            <p>Note</p>
            <MultiRangeSlider
              min={0}
              max={10}
              step={1}
              ruler
              label
              preventWheel={false}
              minValue={minRatingValue}
              maxValue={maxRatingValue}
              onChange={(e) => {
                handleRatingInput(e);
              }}
            />
          </div>
          <div>
            <p>Décennie</p>
            <MultiRangeSlider
              min={1900}
              max={2030}
              step={10}
              stepOnly
              ruler
              label
              preventWheel={false}
              minValue={minDecadeValue}
              maxValue={maxDecadeValue}
              onChange={(e) => {
                handleDecadeInput(e);
              }}
            />
          </div>
          <div>
            <p>Durée (en minutes)</p>
            <MultiRangeSlider
              min={0}
              max={300}
              step={15}
              stepOnly
              ruler
              label
              preventWheel={false}
              minValue={minDurationValue}
              maxValue={maxDurationValue}
              onChange={(e) => {
                handleDurationInput(e);
              }}
            />
          </div>
        </div>
      </section> */}
      {search === "" ? (
        <>
          <ButtonsChoice movies={moviesPopular} series={seriesPopular} />
          <section className="homeList">
            {moviesPopular.length !== 0 && (
              <ContentList
                title="Films les plus populaires"
                hook={moviesPopular}
              />
            )}
            <ContentList
              title="Séries les plus populaires"
              hook={seriesPopular}
            />
            <ContentList
              title="Films à venir"
              hook={moviesUpcoming}
              background={moviesUpcoming?.[0]?.backdrop_path}
            />
            <ContentList title="Films les mieux notés" hook={moviesTop} />
            <ContentList title="Séries les mieux notées" hook={seriesTop} />
            <ContentList
              title="Tendances"
              hook={trending}
              background={trending?.[0]?.backdrop_path}
            />
          </section>
        </>
      ) : (
        <section className="homeList">
          {resultsTotal.total_results === 10000 ? (
            <p className="resultsCount">
              {resultsTotal.total_results}+ résultats
            </p>
          ) : (
            <p className="resultsCount">
              {resultsTotal.total_results} résultats
            </p>
          )}
          <ul className="resultsList">
            {results.map((r) => (
              <ContentCard
                c={r}
                moviesCategories={moviesCategories}
                seriesCategories={seriesCategories}
              />
            ))}
          </ul>
          <ReactPaginate
            breakLabel="..."
            onPageChange={handleSearchPage}
            nextLabel=">"
            className="paginationList"
            pageRangeDisplayed={5}
            pageCount={resultsTotal.total_pages}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </section>
      )}
    </main>
  );
}
