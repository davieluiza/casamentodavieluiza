import React from "react";
import "./styles.css";
import Container from "../../Components/Container2";
import Title from "../../Components/Title";
import Text from "../../Components/Text";
import ItalicText from "../../Components/ItalicText";
import Space from "../../Components/Space";

const TheEvent = () => {
  return (
    <Container>
      <Title text="O Evento" />
      <div className="line">
        <ItalicText color={"#92A8D1"}>Local do evento:</ItalicText>
        <Text>Tá Amarrado</Text>
      </div>
      <ItalicText color={"#828282"}>
        Rua Jaime Barcessat, 6, Tucuruí - PA, 68455-679
      </ItalicText>
      <Space space={"1rem"} />
      <iframe
        title="local"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.388989534125!2d-49.68446126175109!3d-3.841595517707727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92bf8b208cc20473%3A0x3d5481c41ce2c495!2sT%C3%A1%20Amarrado!5e0!3m2!1spt-BR!2sbr!4v1755528778037!5m2!1spt-BR!2sbr"
        width={window.screen.width * 0.8}
        height={window.screen.height * 0.4}
        style={{
          borderRadius: 16,
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

export default TheEvent;
