import React from "react";
import useServiceFetch from "../../Hooks/useServiceFetch";
import "./ManageTour.css";

const ManageTour = () => {
  const [services, setServices] = useServiceFetch();
  const handleDeleteTour = (id) => {
    const proceed = window.confirm("Do you want to delete?");
    if (proceed) {
      const url = `https://ghostly-spirit-25769.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remainingService = services.filter(
              (service) => service._id !== id
            );
            setServices(remainingService);
          }
        });
    }
  };
  return (
    <div>
      <h2 className="head-text mb-5 text-center">manage our tour</h2>
      {services.map((service) => (
        <div>
          <div className="manage-service container">
            <img width="200" height="150" src={service.image} alt="" />
            <div>
              <h2>{service.name} </h2>
              <h3>
                <span className="primary-color">${service.price}</span> /Per
                person{" "}
              </h3>
              <p>{service.details.slice(0, 100)} </p>
            </div>
            <div>
              <button
                className="primary-btn"
                onClick={() => handleDeleteTour(service._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageTour;
