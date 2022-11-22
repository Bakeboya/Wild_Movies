import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import Modal from "react-modal";
import Inputs from "@components/filters/components/Inputs";
import Navbar from "@components/navbar/Navbar";
import Sorting from "@components/filters/components/Sorting";
import { useDiscover } from "../../data/DataFetch";
import ContentCard from "./components/ContentCard";

export const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    padding: "0",
    border: "5px solid #38383d",
    borderRadius: "0",
  },
};

function Search({
  emptySearch,
  setEmptySearch,
  search,
  setSearch,
  setSearchText,
  setSearchPage,
  showModal,
  setShowModal,
  showSearchModal,
  setShowSearchModal,
  showFiltersModal,
  setShowFiltersModal,
  results,
  resultsTotal,
}) {
  const {
    type,
    setType,
    discover,
    filtersTotal,
    sorting,
    setSorting,
    setFiltersPage,
    setDiscoverGenre,
    setDiscoverRating,
    setDiscoverDecade,
    setDiscoverDuration,
    setDiscoverProvider,
    setDiscoverCertification,
  } = useDiscover();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    if (search === "") {
      setEmptySearch("Entrez votre recherche");
    } else {
      setSearch(search);
      setSearchText(search);
      setShowSearchModal(true);
      setShowModal(false);
    }
  };

  const handleSearchPage = (data) => {
    window.scrollTo(0, 0);
    setSearchPage(data.selected + 1);
  };

  const handleFiltersPage = (data) => {
    window.scrollTo(0, 0);
    setFiltersPage(data.selected + 1);
  };

  return (
    <>
      <Modal isOpen={showModal} style={customStyles} ariaHideApp={false}>
        <main className="responsiveSearch">
          <h2>Recherche</h2>
          <div className="filtersInner">
            <input
              type="search"
              placeholder="Rechercher un film, une série"
              onChange={handleChange}
            />
            <p className="emptySearch">{emptySearch}</p>
            <div className="responsiveButton">
              <button type="button" onClick={handleClick}>
                Rechercher
              </button>
            </div>
          </div>
          <p className="choiceText"> ---------- OU ---------- </p>
          <Inputs
            type={type}
            setType={setType}
            setShowModal={setShowModal}
            showFiltersModal={showFiltersModal}
            setShowFiltersModal={setShowFiltersModal}
            discover={discover}
            filtersTotal={filtersTotal}
            setDiscoverCertification={setDiscoverCertification}
            setDiscoverGenre={setDiscoverGenre}
            setDiscoverDecade={setDiscoverDecade}
            setDiscoverProvider={setDiscoverProvider}
            setDiscoverDuration={setDiscoverDuration}
            setDiscoverRating={setDiscoverRating}
          />
          <Navbar />
        </main>
      </Modal>

      <Modal isOpen={showSearchModal} style={customStyles} ariaHideApp={false}>
        {resultsTotal && (
          <main className="filteredResponsive">
            <Sorting sorting={sorting} setSorting={setSorting} />
            {resultsTotal.total_results === 10000 ? (
              <p className="filteredCount">
                {resultsTotal.total_results}+ résultats pour : '{search}'
              </p>
            ) : (
              <p className="filteredCount">
                {resultsTotal.total_results} résultats pour '{search}'
              </p>
            )}
            <ul className="filteredList">
              {results.map((r) => (
                <ContentCard c={r} />
              ))}
            </ul>
            <ReactPaginate
              breakLabel="..."
              onPageChange={handleSearchPage}
              nextLabel=">"
              className="paginationList"
              pageRangeDisplayed={4}
              pageCount={resultsTotal.total_pages}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
          </main>
        )}
      </Modal>

      <Modal isOpen={showFiltersModal} style={customStyles} ariaHideApp={false}>
        {filtersTotal && (
          <main className="filteredResponsive">
            <Sorting sorting={sorting} setSorting={setSorting} />
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
          </main>
        )}
      </Modal>
    </>
  );
}

export default Search;

Search.propTypes = {
  emptySearch: PropTypes.string.isRequired,
  setEmptySearch: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
  setSearchPage: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  showSearchModal: PropTypes.string.isRequired,
  setShowSearchModal: PropTypes.func.isRequired,
  showFiltersModal: PropTypes.string.isRequired,
  setShowFiltersModal: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.array,
      PropTypes.number,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.number,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.number,
    ])
  ).isRequired,
  resultsTotal: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.number,
      PropTypes.array,
      PropTypes.number,
      PropTypes.number,
    ])
  ).isRequired,
};
