import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import "./styles.css";
import Title from "../../Components/Title";
import Text from "../../Components/Text";
import ItalicText from "../../Components/ItalicText";
import Space from "../../Components/Space";

const TheEvent = () => {
    return (
        <Container >
            <Title text="Sobre o evento"/>
            <Row className="justify-content-center">
                <Col sm={12} lg={6}>
                    <iframe
                        title="local"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.388989534125!2d-49.68446126175109!3d-3.841595517707727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92bf8b208cc20473%3A0x3d5481c41ce2c495!2sT%C3%A1%20Amarrado!5e0!3m2!1spt-BR!2sbr!4v1755528778037!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{
                            borderRadius: 16,
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default TheEvent;
