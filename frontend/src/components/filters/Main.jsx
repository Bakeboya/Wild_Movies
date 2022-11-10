import React from "react";
import PropTypes from "prop-types";
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
import SearchResults from "./components/SearchResults";

export default function Main({
  results,
  resultsTotal,
  searchPage,
  setSearchPage,
}) {
  const { moviesPopular } = useMoviesPopular();
  const { moviesTop } = useMoviesTop();
  const { discover } = useDiscover();
  const { moviesUpcoming } = useUpcoming();
  const { trending } = useTrending();
  const { seriesTop } = useSeriesTop();
  const { seriesPopular } = useSeriesPopular();

  return (
    <main className="home">
      {results.length === 0 ? (
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
        <SearchResults
          results={results}
          resultsTotal={resultsTotal}
          searchPage={searchPage}
          setSearchPage={setSearchPage}
        />
      )}
    </main>
  );
}

Main.propTypes = {
  searchPage: PropTypes.number.isRequired,
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
