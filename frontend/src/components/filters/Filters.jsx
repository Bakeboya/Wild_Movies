import React, { useState } from "react";
import Select from "react-select";
import MultiRangeSlider from "multi-range-slider-react";
import ContentCard from "./components/ContentCard";
import ContentList from "./components/ContentList";
import {
  useSearch,
  useUpcoming,
  useMoviesTop,
  useSeriesTop,
  useSeriesPopular,
  useMoviesDiscover,
  useMoviesCategories,
  useSeriesCategories,
} from "../../data/DataFetch";
import {
  genreOptions,
  providerOptions,
  certificationOptions,
} from "../../data/FiltersArrays";

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
    moviesDiscover,
    setMoviesDiscoverGenre,
    setMoviesDiscoverRating,
    setMoviesDiscoverDecade,
    setMoviesDiscoverDuration,
    setMoviesDiscoverProvider,
    setMoviesDiscoverCertification,
  } = useMoviesDiscover();
  const { moviesUpcoming } = useUpcoming();
  const { seriesTop } = useSeriesTop();
  const { seriesPopular } = useSeriesPopular();

  const handleSelectGenres = (option) => {
    let genresQuery = "&with_genres=";
    option.map((o, i) => {
      genresQuery += o.id;
      if (i < option.length) {
        genresQuery += ",";
      }
      return setMoviesDiscoverGenre(genresQuery);
    });
    if (option.length === 0) {
      setMoviesDiscoverGenre("");
    }
  };

  const handleSelectProvider = (option) => {
    let providersQuery = "&watch_region=FR&with_watch_providers=";
    option.map((o, i) => {
      providersQuery += o.id;
      if (i < option.length) {
        providersQuery += ",";
      }
      return setMoviesDiscoverProvider(providersQuery);
    });
    if (option.length === 0) {
      setMoviesDiscoverProvider("");
    }
  };

  const handleSelectCertification = (option) => {
    let certificationsQuery = "&certification_country=FR&certification=";
    if (option !== null) {
      certificationsQuery += option.id;
      setMoviesDiscoverCertification(`${certificationsQuery}`);
    } else if (option === null) {
      setMoviesDiscoverCertification("");
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
    setMoviesDiscoverRating(`${ratingMinQuery}${ratingMaxQuery}`);
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
    setMoviesDiscoverDecade(`${decadeMinQuery}${decadeMaxQuery}`);
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
    setMoviesDiscoverDuration(`${durationMinQuery}${durationMaxQuery}`);
  };

  const handlePrevPage = () => {
    window.scrollTo(0, 0);
    setSearchPage(searchPage - 1);
  };

  const handleNextPage = () => {
    window.scrollTo(0, 0);
    setSearchPage(searchPage + 1);
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

  return (
    <div className="filters">
      <div className="filtersContainer">
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
      </div>
      {search === "" ? (
        <main>
          {moviesDiscover.length !== 0 && (
            <ContentList title="Votre sélection" hook={moviesDiscover} />
          )}
          <ContentList title="Films les mieux notés" hook={moviesTop} />
          <ContentList title="Films à venir" hook={moviesUpcoming} />
          <ContentList title="Séries les mieux notés" hook={seriesTop} />
          <ContentList title="Séries les plus populaires" hook={seriesPopular} />
        </main>
      ) : (
        <main>
          {resultsTotal.total_results === 10000 ? (
            <p className="resultsCount">{resultsTotal.total_results}+ résultats</p>
          ) : (
            <p className="resultsCount">{resultsTotal.total_results} résultats</p>
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
          {results.length === 20 && (
            <>
              {searchPage > 1 && (
                <button type="button" onClick={handlePrevPage}>
                  Précedent
                </button>
              )}
              {searchPage < 500 && (
                <button type="button" onClick={handleNextPage}>
                  Suivant
                </button>
              )}
            </>
          )}
        </main>
      )}
    </div>
  );
}
