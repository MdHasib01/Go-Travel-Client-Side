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
            <h3>Explore Your Travel</h3>
            <p>
              Discover your next great adventure, become an explorer to get
              started!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="https://i.ibb.co/YyKRJBy/pexels-nick-valmores-4476951-min.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>World Best Travel Agency Company Since 2008.</h3>
            <p>
              Discover your next great adventure, become an explorer to get
              started!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="https://i.ibb.co/BcrdDdN/pexels-roberto-nickson-2559941-min.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Explore the World for Travel</h3>
            <p>
              Discover your next great adventure, become an explorer to get
              started!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeBanner;
