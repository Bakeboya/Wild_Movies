import React, { useState } from "react";
import Main from "@components/filters/Main";
import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import Navbar from "@components/navbar/Navbar";
import Search from "@components/filters/Search";
import { useDiscover, useSearch } from "../data/DataFetch";

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

  const { setFiltersPage } = useDiscover();

  const [showModal, setShowModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  const [emptySearch, setEmptySearch] = useState("");

  return (
    <>
      <Navbar
        setEmptySearch={setEmptySearch}
        setResults={setResults}
        setSearch={setSearch}
        setSearchText={setSearchText}
        setSearchPage={setSearchPage}
        setFiltersPage={setFiltersPage}
        showModal={showModal}
        setShowModal={setShowModal}
        setShowSearchModal={setShowSearchModal}
        setShowFiltersModal={setShowFiltersModal}
      />
      <Header
        setSearch={setSearch}
        searchText={searchText}
        setSearchText={setSearchText}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Main
        search={search}
        results={results}
        resultsTotal={resultsTotal}
        setSearchPage={setSearchPage}
      />
 
      <Search
        emptySearch={emptySearch}
        setEmptySearch={setEmptySearch}
        search={search}
        setSearch={setSearch}
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchPage={setSearchPage}
        showModal={showModal}
        setShowModal={setShowModal}
        showSearchModal={showSearchModal}
        setShowSearchModal={setShowSearchModal}
        showFiltersModal={showFiltersModal}
        setShowFiltersModal={setShowFiltersModal}
        results={results}
        resultsTotal={resultsTotal}
      />
    </>
  );
}
