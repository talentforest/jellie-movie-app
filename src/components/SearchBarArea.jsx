import React from "react";
import { css } from "@emotion/css";
import { useState } from "react";

// 영화 검색 기능
export default function SearchBarArea({ filterMovie }) {
  // 유저 인풋창 검색어 상태 관리
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.length === 0) {
      alert("제목을 입력하세요.");
      return false;
    }
    // 필터링 기능
    filterMovie(value);
    setValue("");
  };

  return (
    <div
      className={css`
        margin: 20px 0;
      `}
    >
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          <input
            // required
            className={css`
              color: #333;
              width: 240px;
            `}
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
            height: 20px;
          `}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}
