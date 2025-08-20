import React from "react";
import {Carousel, Col, Image} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';


const importAll = (r) => r.keys().map(r);

export default function Photos() {
    const images = importAll(require.context("../../assets/noivos", true));

    return (
        <Carousel>
            {images.map((image, i) => (
                <Carousel.Item key={i}>

                    <Image src={image} alt={image} fluid/>

                </Carousel.Item>
            ))}
        </Carousel>
    );
};
