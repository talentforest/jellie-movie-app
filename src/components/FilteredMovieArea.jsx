import React from "react";
import { css } from "@emotion/css";
import Movie from "./Movie";

// 영화 리스트가 뜨는 영역
export default function FilteredMovieArea({ filteredMovies }) {
  return (
    <ul
      className={css`
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      `}
    >
      {filteredMovies.map((movie) => (
        <div
          key={movie.id}
          className={css`
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding: 5px;
          `}
        >
          <Movie movie={movie} key={movie.id} />
          <div
            className={css`
              width: 350px;
              text-align: start;
              background-color: rgba(43, 43, 43, 0.5);
              border-radius: 6px;
              height: 310px;
              overflow: scroll;
              padding: 10px;
              font-size: 14px;
            `}
          >
            <div
              className={css`
                padding: 8px 10px;
              `}
            >
              {movie.genres}
            </div>
            <div
              className={css`
                padding: 8px 10px;
              `}
            >
              Runtime: {movie.runtime}
            </div>
            <div
              className={css`
                background-color: #111;
                border-radius: 6px;
                padding: 10px;
                line-height: 1.2;
              `}
            >
              Description {movie.description_full}
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}
