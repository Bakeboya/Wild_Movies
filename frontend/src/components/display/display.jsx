import React, { useEffect } from "react";
import axios from "axios";
import DataMovie from "./dataMovie";

function Display() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [list, setList] = React.useState(true);
  const page = 1;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ac1108de3648bb230bb19e261e8497cb&language=en-US&page=${page}`
      )
      .then((res) => {
        setData(res.data.results);
      });
  }, [page]);

  const [categorie, setCategorie] = React.useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=ac1108de3648bb230bb19e261e8497cb&language=en-US&page=${page}`
      )
      .then((res) => {
        setCategorie(res.data.genres);
        return setLoading(false);
      });
  }, [page]);

  const handleDisplay = () => {
    setList(!list);
  };

  return (
    <div className="displayDiv">
      <button
        type="submit"
        className="buttonDisplay"
        onClick={() => handleDisplay()}
      >
        Display
      </button>
      <br />
      <br />
      <div className={list ? "changeDisplay" : "changeDisplay displayList"}>
        {!loading &&
          data.map((element) => (
            <DataMovie
              id={element.id}
              poster={element.poster_path}
              image={element.backdrop_path}
              title={element.title}
              year={element.release_date}
              genre={element.genre_ids}
              categorie={categorie}
              note={element.vote_average}
            />
          ))}
      </div>
    </div>
  );
}

export default Display;
