import React, { useContext } from "react";
import Inputs from "@components/filters/components/Inputs";
import Navbar from "@components/navbar/Navbar";
import { Link } from "react-router-dom";
import { useDiscover, useSearch } from "../data/DataFetch";

function Search() {
  const { search, setSearch, searchText, setSearchText, resultsTotal } =
    useSearch();

  const {
    discover,
    filtersTotal,
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
    setSearch(searchText);
    setSearchText("");
  };

  return (
    <main className="responsiveSearch">
      <h2>Recherche</h2>
      <div className="filtersInner">
        <input
          type="search"
          placeholder="Rechercher un film, une série"
          onChange={handleChange}
        />
        <div className="responsiveButton">
          <Link
            to="/results"
            state={{ resultsTotal, search }}
            onClick={handleClick}
          >
            Rechercher
          </Link>
        </div>
      </div>
      <p className="choiceText"> ---------- OU ---------- </p>
      <Inputs
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
  );
}

export default Search;
