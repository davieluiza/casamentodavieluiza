import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./styles.css";
import Title from "../../Components/Title";
import Text from "../../Components/Text";
import Space from "../../Components/Space";
import TextBold from "../../Components/TextBold";

const TheEvent = () => {
  return (
    <Col style={{ padding: "2rem" }}>
      <Title text="O grande dia" />
      <Space space="2rem" />
      <Col
        xs={12}
        md={12}
        className="d-flex align-items-start justify-content-center"
      >
        <TextBold>Localização do evento</TextBold>
      </Col>
      <Row
        xs={12}
        md={12}
        className="d-flex align-items-center justify-content-center"
      >
        <div
          style={{
            aspectRatio: 1 / 1,
            width: "100%",
            maxWidth: 800,
          }}
        >
          <iframe
            title="O grande dia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.8553034265824!2d-49.68585072600444!3d-3.841222943754432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92bf8b208cc20473%3A0x3d5481c41ce2c495!2sT%C3%A1%20Amarrado!5e0!3m2!1spt-BR!2sbr!4v1755875317037!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            allowFullScreen={true}
            style={{
              borderRadius: "1rem",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Col
          className="d-flex align-items-baseline justify-content-center"
          sm="12"
        >
          <TextBold>Data:</TextBold>
          <Text>17 de Janeiro de 2025</Text>
          <Space space="1rem" />
          <TextBold>Horário</TextBold>
          <Text>16h00</Text>
        </Col>
        <Space space="1rem" />
        <Container fluid={true}>
          <Container
            style={{
              background: "yellow",
              borderRadius: "1rem",
              padding: "1rem",
            }}
            fluid={true}
          >
            <Text>
              Devido ao local ser aberto e o período chuvoso em Tucuruí, poderá
              haver mau tempo durante a cerimônia, mas não se preocupe, temos um
              plano de contingência caso isso ocorra.
            </Text>
          </Container>
        </Container>
      </Row>
    </Col>
  );
};

export default TheEvent;
