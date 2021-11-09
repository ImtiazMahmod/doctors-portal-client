import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Shared/Footer/Footer";
import HomeBanner from "./HomeBanner/HomeBanner";
import InfoCard from "./InfoCard/InfoCard";
import Testimonial from "./Testimonial/Testimonial";
import Navigation from "../Shared/Navigation/Navigation";

const Home = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <HomeBanner />
      <InfoCard />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
