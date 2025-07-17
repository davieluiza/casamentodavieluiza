import React from "react";
import "./styles.css";

export const Text = (props) => {
  return (
    <p className="text" style={{ color: props.color, textIndent: props.textIndent}}>
      {props.children}
    </p>
  );
};
