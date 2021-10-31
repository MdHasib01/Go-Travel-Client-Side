import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://ghostly-spirit-25769.herokuapp.com/service", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Data added seccessfully");
        }
        console.log(res);
      });
  };
  return (
    <div>
      <div className="service-banner">
        <h2>Add Places To travel</h2>
      </div>
      <div className="service-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="name" required />
          <input
            type="number"
            {...register("price")}
            placeholder="price"
            required
          />
          <input type="number" {...register("days")} placeholder="days" />
          <input {...register("location")} placeholder="location" />
          <textarea {...register("details")} placeholder="details" />
          <input {...register("image")} placeholder="image URL" required />
          <input className="primary-btn" type="submit" value="Add service" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
