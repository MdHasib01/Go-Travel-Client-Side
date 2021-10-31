import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useServiceFetch from "../../Hooks/useServiceFetch";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services] = useServiceFetch();
  console.log(services);
  return (
    <div className="services mt-5">
      <h2 id="tours" className="text-center head-text">
        Our Most Popular Adventures
      </h2>
      <div className="container">
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
