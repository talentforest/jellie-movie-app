import React from "react";
import styles from "../css/MovieRow.module.css";

export default function Movie({ movie }) {
  return (
    <li>
      <div className={styles.MovieRow}>
        <img src={movie.large_cover_image} alt={movie.title} />
        <div className={styles.rating}>⭐️ {movie.rating}</div>
        <div className={styles.title}>{movie.title}</div>
      </div>
    </li>
  );
}
