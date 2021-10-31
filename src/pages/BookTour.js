import React, { useState } from "react";
import { useParams } from "react-router";
import useServiceFetch from "../Hooks/useServiceFetch";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./BookTour.css";

const BookTour = () => {
  const { tourId } = useParams();
  const [services] = useServiceFetch();
  const bookedService = services.filter((ser) => ser._id === tourId);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const bookingData = { data, service: bookedService };
    axios
      .post("https://ghostly-spirit-25769.herokuapp.com/booking", bookingData)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Data added seccessfully");
        }
        console.log(res);
      });
  };

  return (
    <div className="book-main-sec container">
      <div>
        <h2 className="head-text text-center mb-5">Book Tour Now</h2>
        {services
          .filter((service) => service._id === tourId)
          .map((service, index) => (
            <div className="tour-sec" key={index}>
              <img src={service.image} alt="" />
              <h2>{service.name}</h2>
              <h3>
                <span className="primary-color">${service.price}</span> /per
                person
              </h3>
              <p>{service.details}</p>
            </div>
          ))}
      </div>

      <div className="service-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Name" required />
          <input {...register("email")} placeholder="Email" required />
          <input type="number" {...register("phone")} placeholder="phone" />
          <textarea {...register("message")} placeholder="Message" />
          <input className="primary-btn" type="submit" value="Book Now" />
        </form>
      </div>
    </div>
  );
};

export default BookTour;
