import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomeBanner.css";
const HomeBanner = () => {
  return (
    <div className="container home-banner">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="https://i.ibb.co/HHFjKNM/pexels-alex-1731822-min.jpg
            "
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="https://i.ibb.co/YyKRJBy/pexels-nick-valmores-4476951-min.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="https://i.ibb.co/BcrdDdN/pexels-roberto-nickson-2559941-min.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeBanner;
