import React from "react";
import useBooking from "../../Hooks/useBooking";
import useServiceFetch from "../../Hooks/useServiceFetch";
import "./ManageService.css";

const ManageService = () => {
  const [booked, setBooked] = useBooking();
  console.log(booked);
  const handleDeleteBooking = (id) => {
    const proceed = window.confirm("are you want to delete");
    if (proceed) {
      const url = `https://ghostly-spirit-25769.herokuapp.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingbook = booked.filter((book) => book._id !== id);
            setBooked(remainingbook);
          }
        });
    }
  };

  return (
    <div>
      <h2>This is manage service</h2>
      {booked.map((book) => (
        <div key={book._id}>
          <img width="200" height="150" src={book.service[0].image} alt="" />
          <h2>Name: {book.data.name} </h2>
          <h2>book_key: {book.service[0].name} </h2>
          <h2>book_key: {book.data.email} </h2>
          <button onClick={() => handleDeleteBooking(book._id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
