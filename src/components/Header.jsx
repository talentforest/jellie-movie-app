import React from "react";
import { css } from "@emotion/css";

export default function Header() {
  return (
    <div
      className={css`
        background-color: #240046;
        padding: 32px;
        font-family: san-serif;
        font-size: 20px;
        font-weight: bold;
        color: white;
      `}
    >
      🍿Jellie Movie App🥤
    </div>
  );
}
