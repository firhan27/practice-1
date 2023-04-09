import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import "./Navbar.css";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="Carousel-img d-block w-100" src="https://images7.alphacoders.com/123/1233080.jpg" alt="First slide" />
        <Carousel.Caption className="Movie-caption">
          <h2 className="Movie-caption-title">Doctor Strange</h2>
          <p className="Movie-caption-text">
            Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis
            interdum.
          </p>
          <Button className="Movie-caption-button" variant="danger">
            Watch Trailer
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="Carousel-img d-block w-100" src="https://images7.alphacoders.com/123/1233080.jpg" alt="First slide" />
        <Carousel.Caption className="Movie-caption">
          <h2 className="Movie-caption-title">Doctor Strange</h2>
          <p className="Movie-caption-text">
            Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis
            interdum.
          </p>
          <Button className="Movie-caption-button" variant="danger">
            Watch Trailer
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
