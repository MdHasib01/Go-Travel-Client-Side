import { useEffect, useState } from "react";

const useBooking = () => {
  const [booked, setBooked] = useState([]);
  useEffect(() => {
    fetch("https://ghostly-spirit-25769.herokuapp.com/booking/")
      .then((res) => res.json())
      .then((data) => setBooked(data));
  }, []);
  return [booked, setBooked];
};

export default useBooking;
