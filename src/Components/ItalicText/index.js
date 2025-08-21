import React from "react";
import "./styles.css";

const ItalicText = (props) => {
  return (
    <p
      className="text-italic"
      style={{ color: props.color}}
    >
      {props.children}
    </p>
  );
};

export default ItalicText;
