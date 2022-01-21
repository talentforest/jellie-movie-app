import React from "react";
import { css } from "@emotion/css";
import { useState } from "react";

// 영화 검색 기능
export default function SearchBarArea({ movies }) {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // 필터링 기능
  };

  return (
    <div
      className={css`
        padding-bottom: 20px;
      `}
    >
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          <input
            id="name"
            type="text"
            placeholder="Search Movie..."
            value={value}
            onChange={onChange}
          />
        </label>
        <button
          className={css`
            color: #333;
            margin-left: 5px;
          `}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
