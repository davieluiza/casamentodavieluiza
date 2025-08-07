import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const importAll = (r) => r.keys().map(r);

export const Photos = () => {
  // const namorados = importAll(require.context("../../assets/"))
  // const noivos = importAll(require.context("../../assets/"));
  const images = importAll(require.context("../../assets/noivos", true));

  return (
    <Carousel responsive={responsive} autoPlay={true}>
      {images.map((img, index) => (
        <>
          <div
            style={{
              margin: "8px",
              padding: "8px",
              backgroundColor: "chocolate",
            }}
          >
            <img
              src={img}
              key={index}
              style={{ height: "auto", width: "600px", margin: "1rem" }}
            />
          </div>
        </>
      ))}
    </Carousel>
  );
};
