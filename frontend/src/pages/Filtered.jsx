import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Navbar from "@components/navbar/Navbar";
import ContentCard from "@components/filters/components/ContentCard";
import { useLocation } from "react-router-dom";
import { useDiscover } from "../data/DataFetch";

function Filtered() {
  const location = useLocation();

  let filtersTotal = location.state;
  const [filtersPage, setFiltersPage] = useState(1);

  const tmp = useDiscover(filtersPage);
  if (tmp.filtersTotal) filtersTotal = tmp.filtersTotal;

  const handleFiltersPage = (data) => {
    window.scrollTo(0, 0);
    setFiltersPage(data.selected + 1);
  };

  return (
    <>
      <main className="filteredResponsive">
        <p className="filteredCount">{filtersTotal.total_results} résultats</p>
        <ul className="filteredList">
          {filtersTotal.results.map((r) => (
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
      <Navbar />
    </>
  );
}

export default Filtered;
