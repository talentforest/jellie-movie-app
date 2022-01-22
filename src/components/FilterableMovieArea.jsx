import React from "react";
import { css } from "@emotion/css";
import MovieListArea from "./MovieListArea";
import SearchBarArea from "./SearchBarArea";
import { useEffect, useState } from "react";

export default function FilterableMovieArea() {
  // async, await로 로딩 상태 관리
  const [loading, setLoading] = useState(true);
  // 받아온 전체 movie 데이터 상태 관리
  const [allMovies, setAllMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setAllMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log("API로 얻은 영화 데이터", allMovies);

  const filterMovie = (value) => {
    setAllMovies(
      allMovies.filter(
        (movie) => movie.title.toLowerCase().includes(value?.toLowerCase()) // Optional chaining
      )
    );
  };

  return (
    <div
      className={css`
        background-color: #111;
        padding: 32px;
        color: white;
      `}
    >
      <SearchBarArea allMovies={allMovies} filterMovie={filterMovie} />
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
      <MovieListArea allMovies={allMovies} />
    </div>
  );
}
