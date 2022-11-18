import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import ContentList from "./components/ContentList";
import {
  useUpcoming,
  useMoviesTop,
  useSeriesTop,
  useSeriesPopular,
  useDiscover,
  useTrending,
  useMoviesPopular,
} from "../../data/DataFetch";
import ButtonsChoice from "./components/ButtonsChoice";
import ContentCard from "./components/ContentCard";

export default function Main({ search, results, resultsTotal, setSearchPage }) {
  const { moviesPopular } = useMoviesPopular();
  const { moviesTop } = useMoviesTop();
  const { moviesUpcoming } = useUpcoming();
  const { trending } = useTrending();
  const { seriesTop } = useSeriesTop();
  const { seriesPopular } = useSeriesPopular();

  const handleSearchPage = (data) => {
    window.scrollTo(0, 0);
    setSearchPage(data.selected + 1);
  };

  return (
    <main className="home">
      {results.length === 0 ? (
        <>
          <ButtonsChoice movies={moviesPopular} series={seriesPopular} />
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
              {resultsTotal.total_results}+ résultats pour : '{search}'
            </p>
          ) : (
            <p className="resultsCount">
              {resultsTotal.total_results} résultats pour '{search}'
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
            pageRangeDisplayed={4}
            pageCount={resultsTotal.total_pages}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </section>
      )}
    </main>
  );
}

Main.propTypes = {
  search: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.array,
      PropTypes.number,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.number,
      PropTypes.string,
      PropTypes.string,
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.number,
    ])
  ).isRequired,
  resultsTotal: PropTypes.string.isRequired,
  setSearchPage: PropTypes.func.isRequired,
};
