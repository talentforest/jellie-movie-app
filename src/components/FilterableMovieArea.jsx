import React from "react";
import { css } from "@emotion/css";
import MovieListArea from "./MovieListArea";
import SearchBarArea from "./SearchBarArea";

import { useEffect, useState } from "react";

export default function FilterableMovieArea() {
  // async, await로 로딩 상태관리
  const [loading, setLoading] = useState(true);
  // movie 데이터 상태 관리
  const [movies, setMovies] = useState([]);

  // movie 데이터 API로 얻어오기
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div
      className={css`
        background-color: #111;
        padding: 32px;
        color: white;
      `}
    >
      <SearchBarArea movies={movies} />
      <div>
        {loading ? (
          <h1
            className={css`
              height: 100vh;
            `}
          >
            Loading...
          </h1>
        ) : null}
      </div>
      <MovieListArea movies={movies} />
    </div>
  );
}
