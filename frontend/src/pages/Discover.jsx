import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";
import ContentCard from "@components/filters/components/ContentCard";
import Navbar from "@components/navbar/Navbar";
import Footer from "@components/footer/Footer";
import Inputs from "@components/filters/components/Inputs";
import Sorting from "@components/filters/components/Sorting";
import { useDiscover } from "../data/DataFetch";

function Discover() {
  const location = useLocation();
  const { title, placeholder } = location.state;

  const {
    filtersTotal,
    discover,
    filtersPage,
    setFiltersPage,
    setSorting,
    setDiscoverGenre,
    setDiscoverRating,
    setDiscoverDecade,
    setDiscoverDuration,
    setDiscoverProvider,
    setDiscoverCertification,
  } = useDiscover();

  const handleFiltersPage = (data) => {
    window.scrollTo(0, 0);
    setFiltersPage(data.selected + 1);
  };

  return (
    <>
      <Navbar />
      <main className="discover">
        <section className="filtersContainer">
          <h2>{title}</h2>
          <Sorting placeholder={placeholder} setSorting={setSorting} />
          <Inputs
            setDiscoverCertification={setDiscoverCertification}
            setDiscoverGenre={setDiscoverGenre}
            setDiscoverDecade={setDiscoverDecade}
            setDiscoverProvider={setDiscoverProvider}
            setDiscoverDuration={setDiscoverDuration}
            setDiscoverRating={setDiscoverRating}
          />
        </section>
        <section className="filtered">
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
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Discover;
