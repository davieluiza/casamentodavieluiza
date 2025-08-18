import React from "react";
import "./styles.css";

const ItalicText = (props) => {
  return (
    <p
      className="text-italic"
      style={{ color: props.color, textIndent: props.textIndent || "1rem" }}
    >
      {props.children}
    </p>
  );
};

export default ItalicText;
