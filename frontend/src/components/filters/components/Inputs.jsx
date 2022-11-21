import React, { useState } from "react";
import PropTypes from "prop-types";
import MultiRangeSlider from "multi-range-slider-react";
import Select from "react-select";
import {
  genreOptions,
  providerOptions,
  certificationOptions,
} from "../../../data/FiltersArrays";

function Inputs({
  type,
  setType,
  setShowModal,
  setShowFiltersModal,
  setDiscoverGenre,
  setDiscoverRating,
  setDiscoverDecade,
  setDiscoverDuration,
  setDiscoverProvider,
  setDiscoverCertification,
}) {
  const curYear = new Date().getFullYear();

  const [toggleType, setToggleType] = useState(0);
  const typeButton = (index) => {
    setToggleType(index);
  };

  const handleMovie = () => {
    typeButton(1);
    setType("movie");
  };

  const handleTv = () => {
    typeButton(2);
    setType("tv");
  };

  const handleClick = () => {
    setShowFiltersModal(true);
    setShowModal(false);
    if (type === "") {
      setType("movie");
    }
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
    <div className="filtersInner">
      <h3>Filtrer</h3>
      <hr />
      <div className="responsiveTypeChoice">
        <button
          type="button"
          className={toggleType === 1 ? "selected" : ""}
          onClick={handleMovie}
        >
          Films
        </button>
        <button
          type="button"
          className={toggleType === 2 ? "selected" : ""}
          onClick={handleTv}
        >
          Séries
        </button>
      </div>
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
          max={curYear}
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
      <div className="responsiveButton">
        <button type="button" onClick={handleClick}>
          Filtrer
        </button>
      </div>
    </div>
  );
}

export default Inputs;

Inputs.propTypes = {
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
  setDiscoverGenre: PropTypes.func.isRequired,
  setDiscoverRating: PropTypes.func.isRequired,
  setDiscoverDecade: PropTypes.func.isRequired,
  setDiscoverDuration: PropTypes.func.isRequired,
  setDiscoverProvider: PropTypes.func.isRequired,
  setDiscoverCertification: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
  setShowFiltersModal: PropTypes.func.isRequired,
};
