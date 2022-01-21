import React from "react";
import { css } from "@emotion/css";
import styles from "../css/MovieRow.module.css";

// 영화 리스트가 뜨는 영역
export default function MovieListArea({ movies }) {
  const movieRow = movies.map((movie) => {
    return (
      <li key={movie.id}>
        <div className={styles.MovieRow}>
          <img src={movie.large_cover_image} alt={movie.title} />
          <div className={styles.rating}>⭐️ {movie.rating}</div>
          <div className={styles.title}>{movie.title}</div>
        </div>
      </li>
    );
  });

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
      {movieRow}
    </ul>
  );
}
