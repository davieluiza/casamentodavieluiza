import React from "react";
import "./styles.css";

export const Text = (props) => {
  return (
    <p className="text" style={{ color: props.color }}>
      {props.children}
    </p>
  );
};
