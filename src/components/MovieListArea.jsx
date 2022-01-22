import React from "react";
import { css } from "@emotion/css";
import Movie from "../components/Movie";
// import { useState } from "react";

// 영화 리스트가 뜨는 영역
export default function MovieListArea({ allMovies }) {
  return (
    <ul
      className={css`
        list-style: none;
        // width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      `}
    >
      {allMovies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}
