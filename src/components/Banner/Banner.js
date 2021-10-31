import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner container">
      <Row xs={1} md={3} className="g-4">
        <Col>
          <h2 classNmae="head-text head-text">Popular Destinations</h2>
          <p classNmae="text-center">
            Discover Travel Insurance In Usa At Asksly! - Easily Found! Many
            Products. Easy Acces. Quick Results. Compare Products. Search and
            Discover. Find Easily
          </p>
        </Col>
        <Col>
          <Card>
            <Card.Img
              className="card-img"
              variant="top"
              src="https://i.ibb.co/842g79D/pexels-pierre-blach-2901209.jpg"
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              className="card-img"
              variant="top"
              src="https://i.ibb.co/0Jk114y/pexels-rachel-claire-4https://i.ibb.co/842g79D/pexels-pierre-blach-2901209.jpg"
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              className="card-img"
              variant="top"
              src="https://i.ibb.co/0Jk114y/pexels-rachel-claire-4825701.jpg"
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              className="card-img"
              variant="top"
              src="https://i.ibb.co/pnRc9r3/pexels-sam-kolder-2387873.jpg"
            />
          </Card>
        </Col>
        <Col>
          <h2 className="mt-5 me-5 text-center mb-3">
            Find All Destination
            <HashLink to="home/path#tours">
              <button className="primary-btn">Find now</button>
            </HashLink>
          </h2>
        </Col>
      </Row>

      <div className="map-sec">
        <h2 className="text-center head-text">Explore the World for Travel</h2>
        <img
          className="map-image"
          src="https://i.ibb.co/RYVzcJC/brett-zeck-eyf-Mg-Gvo9-PA-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
