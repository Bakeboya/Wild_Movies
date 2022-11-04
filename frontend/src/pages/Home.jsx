import Filters from "@components/filters/Filters";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import Navbar from "@components/navbar/Navbar";
import React from "react";
import { useSearch } from "../data/DataFetch";

export default function Home() {
  const {
    search,
    setSearch,
    searchText,
    setSearchText,
    results,
    setResults,
    resultsTotal,
    setSearchPage,
  } = useSearch();

  return (
    <>
      <Navbar setResults={setResults} />
      <Header
        search={search}
        setSearch={setSearch}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Filters
        search={search}
        searchText={searchText}
        results={results}
        resultsTotal={resultsTotal}
        setSearchPage={setSearchPage}
      />
      <Footer />
    </>
  );
}
