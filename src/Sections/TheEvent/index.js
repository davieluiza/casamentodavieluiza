import React from "react";
import "./styles.css";
import Container from "../../Components/Container";
import Title from "../../Components/Title";
import Info from "../../Components/Info";

const TheEvent = () => {
  return (
    <Container>
      {/* <Title text="O Evento" /> */}
      <Info title="Data e Hora" info="17 de Janeiro de 2026 | 16h00" />
      <Info title="Local" info="Espaço Azul Eventos" />
    </Container>
  );
};

export default TheEvent;
