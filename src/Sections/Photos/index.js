import React from "react";
import {Carousel, Col, Row, Image, Container} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';


const importAll = (r) => r.keys().map(r);

export default function Photos() {
    const images = importAll(require.context("../../assets/noivos", true));

    return (
        <Container style={{padding: "2rem"}} fluid>
            <Row className="justify-content-center">
                <Col xs={12} lg={6}>
                    <Carousel>
                        {images.map((image, i) => (<Carousel.Item key={i}>
                            <Image src={image} alt={image} style={{borderRadius: "2rem"}} fluid/>
                        </Carousel.Item>))}
                    </Carousel>
                </Col>
            </Row>
        </Container>);
};
