import React, { useState } from "react";
import Select from "react-select";
import ReactPaginate from "react-paginate";
import MultiRangeSlider from "multi-range-slider-react";
import { useLocation } from "react-router-dom";

import ContentCard from "@components/filters/components/ContentCard";
import Navbar from "@components/navbar/Navbar";
import Footer from "@components/footer/Footer";
import { useDiscover, useSearch } from "../data/DataFetch";
import {
  genreOptions,
  providerOptions,
  certificationOptions,
  sortingOptions,
} from "../data/FiltersArrays";

function Discover() {
  const location = useLocation();
  const { title, placeholder } = location.state;

  const { setSearch, setSearchPage } = useSearch();
  const {
    setSorting,
    filtersTotal,
    setFiltersPage,
    discover,
    setDiscoverGenre,
    setDiscoverRating,
    setDiscoverDecade,
    setDiscoverDuration,
    setDiscoverProvider,
    setDiscoverCertification,
  } = useDiscover();

  const handleSorting = (option) => {
    setSorting(`${option.id}`);
  };

  const handleSelectGenres = (option) => {
    let genresQuery = "&with_genres=";
    option.map((o, i) => {
      genresQuery += o.id;
      if (i < option.length) {
        genresQuery += ",";
      }
      return setDiscoverGenre(genresQuery);
    });
    if (option.length === 0) {
      setDiscoverGenre("");
    }
  };

  const handleSelectProvider = (option) => {
    let providersQuery = "&watch_region=FR&with_watch_providers=";
    option.map((o, i) => {
      providersQuery += o.id;
      if (i < option.length) {
        providersQuery += ",";
      }
      return setDiscoverProvider(providersQuery);
    });
    if (option.length === 0) {
      setDiscoverProvider("");
    }
  };

  const handleSelectCertification = (option) => {
    let certificationsQuery = "&certification_country=FR&certification=";
    if (option !== null) {
      certificationsQuery += option.id;
      setDiscoverCertification(`${certificationsQuery}`);
    } else if (option === null) {
      setDiscoverCertification("");
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
    setDiscoverRating(`${ratingMinQuery}${ratingMaxQuery}`);
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
    setDiscoverDecade(`${decadeMinQuery}${decadeMaxQuery}`);
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
    setDiscoverDuration(`${durationMinQuery}${durationMaxQuery}`);
  };

  const handleFiltersPage = (data) => {
    window.scrollTo(0, 0);
    setFiltersPage(data.selected + 1);
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
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen && "rotate(180deg)",
    }),
  };

  return (
    <>
      <Navbar />
      <main className="discover">
        <section className="filtersContainer">
          <h2>{title}</h2>
          {/* <div className="searchContainer">
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
          </div> */}
          <div className="filtersInner">
            <h3>Trier</h3>
            <hr />
            <Select
              isClearable
              closeMenuOnSelect={false}
              name="trier"
              options={sortingOptions}
              className="react-select-container"
              classNamePrefix="react-select"
              styles={customStyles}
              placeholder={`${placeholder}`}
              getOptionValue={(option) => option.id}
              onChange={(option) => handleSorting(option)}
            />
          </div>
          <div className="filtersInner">
            <h3>Filtrer</h3>
            <hr />
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
        </section>
        <section className="filtered">
          <p className="filteredCount">
            {filtersTotal.total_results} résultats
          </p>
          <ul className="filteredList">
            {discover.map((r) => (
              <ContentCard c={r} />
            ))}
          </ul>
          <ReactPaginate
            breakLabel="..."
            onPageChange={handleFiltersPage}
            nextLabel=">"
            className="paginationList"
            pageRangeDisplayed={4}
            pageCount={filtersTotal.total_pages}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Discover;
