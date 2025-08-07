import React from "react";
import "./styles.css"

const Info = (title, info) => {
  return (
    <div className="card-info">
      <p title={title}></p>
      <p info={info}></p>
    </div>
  );
};

export default Info;
