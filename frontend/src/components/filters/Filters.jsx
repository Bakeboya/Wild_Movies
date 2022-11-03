import React from "react";
import ReactPaginate from "react-paginate";
import ContentCard from "./components/ContentCard";
import ContentList from "./components/ContentList";
import {
  useSearch,
  useUpcoming,
  useMoviesTop,
  useSeriesTop,
  useSeriesPopular,
  useDiscover,
  useTrending,
  useMoviesPopular,
} from "../../data/DataFetch";
import ButtonsChoice from "./components/ButtonsChoice";

export default function Filters() {
  const { search, results, resultsTotal, setSearchPage } = useSearch();
  const { moviesPopular } = useMoviesPopular();
  const { moviesTop } = useMoviesTop();
  const { discover } = useDiscover();
  const { moviesUpcoming } = useUpcoming();
  const { trending } = useTrending();
  const { seriesTop } = useSeriesTop();
  const { seriesPopular } = useSeriesPopular();

  const handleSearchPage = (data) => {
    window.scrollTo(0, 0);
    setSearchPage(data.selected + 1);
  };

  const moviesTopId = moviesTop.map((mt) => mt.id);

  return (
    <main className="home">
      {search === "" ? (
        <>
          <ButtonsChoice movies={discover} series={seriesPopular} />
          <section className="homeList">
            <ContentList
              title="Films les plus populaires"
              hook={moviesPopular}
            />
            <ContentList
              title="Séries les plus populaires"
              hook={seriesPopular}
            />
            <ContentList
              title="Films à venir"
              hook={moviesUpcoming}
              background={moviesUpcoming?.[0]?.backdrop_path}
            />
            <ContentList title="Films les mieux notés" hook={moviesTop} />
            <ContentList title="Séries les mieux notées" hook={seriesTop} />
            <ContentList
              title="Tendances"
              hook={trending}
              background={trending?.[0]?.backdrop_path}
            />
          </section>
        </>
      ) : (
        <section className="homeList">
          {resultsTotal.total_results === 10000 ? (
            <p className="resultsCount">
              {resultsTotal.total_results}+ résultats
            </p>
          ) : (
            <p className="resultsCount">
              {resultsTotal.total_results} résultats
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
            pageRangeDisplayed={5}
            pageCount={resultsTotal.total_pages}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </section>
      )}
    </main>
  );
}
