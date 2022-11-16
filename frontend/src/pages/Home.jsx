import Main from "@components/filters/Main";
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
      <Navbar
        setResults={setResults}
        search={search}
        setSearch={setSearch}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Header
        search={search}
        setSearch={setSearch}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Main
        search={search}
        searchText={searchText}
        results={results}
        resultsTotal={resultsTotal}
        setSearchPage={setSearchPage}
      />
    </>
  );
}
