import React from "react";
import Banner from "../components/Banner/Banner";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Services from "../components/Services/Services";

const HomePage = () => {
  return (
    <div>
      <HomeBanner />
      <Services></Services>
      <Banner></Banner>
    </div>
  );
};

export default HomePage;
