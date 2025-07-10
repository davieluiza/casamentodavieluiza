import React from "react";
import "./styles.css"
import { Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <div className="header">
      <h1>Davi e Luiza  </h1>
      <ul>
        <a href="#">home</a>
        <a href="#">nossa história</a>
        <a href="#">o evento</a>
        <a href="#">ajuda</a>
        <a href="#">presentes</a>
      </ul>
    </div>
  );
};

export default Header;
