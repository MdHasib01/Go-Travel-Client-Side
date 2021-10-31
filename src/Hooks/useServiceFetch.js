import React, { useEffect, useState } from "react";

const useServiceFetch = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://ghostly-spirit-25769.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default useServiceFetch;
