import React from "react";
import SearchResults from "@components/filters/components/SearchResults";
import { useLocation } from "react-router-dom";
import Navbar from "@components/navbar/Navbar";
import { useSearch } from "../data/DataFetch";

function Results() {
  const { searchPage, setSearchPage } = useSearch();

  const location = useLocation();
  const { resultsTotal } = location.state;
  const { search } = location.state;
  const { results } = resultsTotal;

  return (
    <>
      <main className="home">
        <SearchResults
          search={search}
          resultsTotal={resultsTotal}
          results={results}
          searchPage={searchPage}
          setSearchPage={setSearchPage}
        />
      </main>
      <Navbar />
    </>
  );
}

export default Results;
