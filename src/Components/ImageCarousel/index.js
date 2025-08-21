import React from "react";
import {Carousel, Col, Row, Image, Container} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import SmText from "../SmText";


const importAll = (r) => r.keys().map(r);

export default function ImageCarousel({src, caption}) {

    const images = importAll(src);

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} lg={6} className="justify-content-center">
                    <SmText text={caption}/>
                    <Carousel>
                        {images.map((image, i) => (<Carousel.Item key={i}>
                            <Image src={image} alt={image} style={{borderRadius: "2rem"}} fluid/>
                        </Carousel.Item>))}
                    </Carousel>
                </Col>
            </Row>
        </Container>);
};
