import React from "react";
import "./styles.css";

const Text = (props) => {
  return (
    <p
      className="text"
      style={{ color: props.color, textIndent: props.textIndent || "1rem" }}
    >
      {props.children}
    </p>
  );
};

export default Text;
