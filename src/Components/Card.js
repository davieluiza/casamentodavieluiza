import React from "react";
import "./styles.css";

export const Card = ({ text, legend }) => {
  function formatWithZero(value) {
    return value.toString().padStart(2, 0);
  }

  return (
    <div className="card-area">
      <div className="card">
        <p className="card-text">{formatWithZero(text)}</p>
      </div>
      <p className="captionSmall">{legend}</p>
    </div>
  );
};
