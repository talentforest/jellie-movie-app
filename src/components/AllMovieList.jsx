import React from "react";
import { css } from "@emotion/css";
import Movie from "./Movie";

// 모든 영화 리스트가 뜨는 영역
export default function AllMovieList({ allMovies }) {
  return (
    <>
      <h1
        className={css`
          font-size: 20px;
          font-weight: bold;
          text-align: start;
          margin-top: 30px;
          padding: 10px;
        `}
      >
        🏆 A movie with a rating of over 9.0
      </h1>
      <ul
        className={css`
          width: 100%;
          display: flex;
          overflow: scroll;
        `}
      >
        {allMovies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </ul>
    </>
  );
}
