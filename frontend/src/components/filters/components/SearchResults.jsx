import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import ContentCard from "./ContentCard";

function SearchResults({ search, setSearchPage, results, resultsTotal }) {
  const handleSearchPage = (data) => {
    window.scrollTo(0, 0);
    setSearchPage(data.selected + 1);
  };

  return (
    <section className="homeList">
      {resultsTotal.total_results === 10000 ? (
        <p className="resultsCount">
          {resultsTotal.total_results}+ résultats pour : '{search}'
        </p>
      ) : (
        <p className="resultsCount">
          {resultsTotal.total_results} résultats pour '{search}'
        </p>
      )}
      <ul className="resultsList">
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
    </section>
  );
}

export default SearchResults;

SearchResults.propTypes = {
  search: PropTypes.arrayOf(
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
  setSearchPage: PropTypes.func.isRequired,
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
