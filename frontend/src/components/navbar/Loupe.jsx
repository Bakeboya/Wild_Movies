import React from "react";
import PropTypes from "prop-types";
import GoSearch from "@meronex/icons/go/GoSearch";

function Loupe({
  setEmptySearch,
  showModal,
  setShowModal,
  setShowSearchModal,
  setShowFiltersModal,
}) {
  const openCloseModal = () => {
    setShowModal(!showModal);
    setShowSearchModal(false);
    setShowFiltersModal(false);
    setEmptySearch("");
  };

  return (
    <div className="LoupeDiv">
      <button type="button" className="Loupe" onClick={openCloseModal}>
        <GoSearch className="GoSearch" />
      </button>
    </div>
  );
}

export default Loupe;

Loupe.propTypes = {
  setEmptySearch: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  setShowSearchModal: PropTypes.func.isRequired,
  setShowFiltersModal: PropTypes.func.isRequired,
};
