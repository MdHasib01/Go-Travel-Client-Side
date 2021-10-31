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
      <h2 className="text-center head-text mt-5 mb-5">manage your booking</h2>
      {booked.map((book) => (
        <div key={book._id} className="manage-services">
          <div className="manage-service container">
            <img width="200" height="150" src={book.service[0].image} alt="" />
            <div>
              <h2>{book.service[0].name} </h2>
              <h3>Name: {book.data.name} </h3>
              <h3>Email: {book.data.email} </h3>
            </div>
            <div>
              <button
                className="primary-btn"
                onClick={() => handleDeleteBooking(book._id)}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
