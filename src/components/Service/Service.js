import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./service.css";

const Service = (props) => {
  const { name, price, details, image, _id } = props.service;
  const history = useHistory();
  const handleBookTour = () => {
    history.push(`/booktour/${_id}`);
  };

  return (
    <div>
      <Col>
        <Card>
          <Card.Img className="card-img" variant="top" src={image} />
          <Card.Body>
            <Card.Title className="card-title">{name.slice(0, 30)}</Card.Title>
            <p className="card-price">
              <span className="primary-color">${price}</span> /Per person
            </p>
            <Card.Text>{details.slice(0, 100)}...</Card.Text>
          </Card.Body>
          <button className="primary-btn" onClick={handleBookTour}>
            Book Tour
          </button>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
