import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { sortingOptions } from "../../../data/FiltersArrays";

function Sorting({ placeholder, setSorting }) {
  const handleSorting = (option) => {
    setSorting(`${option.id}`);
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
  );
}

export default Sorting;

Sorting.propTypes = {
  placeholder: PropTypes.string.isRequired,
  setSorting: PropTypes.func.isRequired,
};
