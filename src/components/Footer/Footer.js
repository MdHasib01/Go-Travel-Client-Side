import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container footer-container">
        <div>
          <Navbar.Brand className="logo" as={Link} to="/">
            <span className="primary-color">
              <FontAwesomeIcon icon={faPlaneDeparture} />
            </span>
            Go<span className="primary-color">Travel.</span>
          </Navbar.Brand>
          <p className="mt-3">
            We are providing travelling services for about ten years.
          </p>
          <p>Follow us</p>
        </div>

        <div>
          <h3 className="main-color">Catagories</h3>
          <ul>
            <li>- Travel Your favourate place</li>
            <li>- Go where ever you want.</li>
            <li>- Choose our service</li>
            <li>- Get free Breakfast</li>
          </ul>
        </div>

        <div>
          <h3 className="main-color">Contact us</h3>
          <ul>
            <li>
              <FontAwesomeIcon className="main-color" icon={faMapMarkedAlt} />{" "}
              250/A Oval Street, Mount View, London, United Kingdom
            </li>
            <li>
              <FontAwesomeIcon className="main-color" icon={faEnvelope} />{" "}
              support@goTour.com
            </li>
            <li>
              <FontAwesomeIcon className="main-color" icon={faPhone} /> +98
              12345 67890
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
