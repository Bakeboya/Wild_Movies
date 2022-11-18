import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import ContentCard from "@components/filters/components/ContentCard";
import Navbar from "@components/navbar/Navbar";
import Inputs from "@components/filters/components/Inputs";
import Sorting from "@components/filters/components/Sorting";
import { useDiscover } from "../data/DataFetch";
import BsFillGridFill from '@meronex/icons/bs/BsFillGridFill';
import BsListUl from '@meronex/icons/bs/BsListUl';

function Discover() {
  const { type } = useParams();

  const {
    setType,
    filtersTotal,
    discover,
    filtersPage,
    setFiltersPage,
    sorting,
    setSorting,
    setDiscoverGenre,
    setDiscoverRating,
    setDiscoverDecade,
    setDiscoverDuration,
    setDiscoverProvider,
    setDiscoverCertification,
  } = useDiscover();

  const [displayToggle, setDisplayToggle] = useState(1)

  useEffect(() => {
    setType(type);
  }, []);

  const handleFiltersPage = (data) => {
    window.scrollTo(0, 0);
    setFiltersPage(data.selected + 1);
  };

  const handleDisplay1 = () => {
    setDisplayToggle(1)
  }

  const handleDisplay2 = () => {
    setDisplayToggle(2)
  }

  console.log(discover)

  return (
    <>
      <Navbar />
      <main className="discover">
        <section className="filtersContainer">
          <h2>{type === "tv" ? "Séries" : "Films"}</h2>
          <Sorting sorting={sorting} setSorting={setSorting} />
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
          <div className="filteredParams">
            <p className="filteredCount">
              {filtersTotal.total_results} résultats
            </p>
            <div className="filteredDisplay">
              <button type="button" onClick={handleDisplay1} className={displayToggle === 1 ? "selected" : ""}>
                <BsFillGridFill />
              </button>
              <button type="button" onClick={handleDisplay2} className={displayToggle === 2 ? "selected" : ""}>
                <BsListUl />
              </button>
            </div>
          </div>
          <ul className={displayToggle === 1 ? "filteredList" : "filteredList columnList"}>
            {discover.map((r) => (
              <ContentCard displayToggle={displayToggle} c={r} />
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
    </>
  );
}

export default Discover;
