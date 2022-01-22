import React from "react";
import styles from "../css/Movie.module.css";

export default function Movie({ movie }) {
  return (
    <li>
      <div className={styles.MovieRow}>
        <img src={movie.large_cover_image} alt={movie.title} />
        <div className={styles.rating}>⭐️ {movie.rating}</div>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.year}>{movie.year}</div>
      </div>
    </li>
  );
}
