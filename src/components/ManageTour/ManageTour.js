import React from "react";
import useServiceFetch from "../../Hooks/useServiceFetch";

const ManageTour = () => {
  const [services, setServices] = useServiceFetch();
  const handleDeleteTour = (id) => {
    const proceed = window.confirm("are you want to delete");
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
      <h2>this is manage tour</h2>
      {services.map((service) => (
        <div>
          <h2>Service Name: {service.name}</h2>
          <button onClick={() => handleDeleteTour(service._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageTour;
