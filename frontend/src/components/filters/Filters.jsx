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
  useMoviesPopular,
  useMoviesCategories,
  useSeriesCategories,
  useTrending,
} from "../../data/DataFetch";
import ButtonsChoice from "./components/ButtonsChoice";

export default function Filters() {
  const { moviesCategories } = useMoviesCategories();
  const { seriesCategories } = useSeriesCategories();
  const { search, results, resultsTotal, setSearchPage } = useSearch();
  const { moviesTop } = useMoviesTop();
  const { moviesPopular } = useMoviesPopular();
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
          <ButtonsChoice movies={moviesPopular} series={seriesPopular} />
          <section className="homeList">
            {moviesPopular.length !== 0 && (
              <ContentList
                title="Films les plus populaires"
                hook={moviesPopular}
              />
            )}
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
              <ContentCard
                c={r}
                moviesCategories={moviesCategories}
                seriesCategories={seriesCategories}
              />
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
