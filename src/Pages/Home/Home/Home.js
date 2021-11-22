import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import BrandList from "../BrandList/BrandList";
import FeedBack from "../FeedBack/FeedBack";
import Footer from "../Footer/Footer";
import ServiceSection from "../ServiceSection/ServiceSection";
import Slider from "../Slider/Slider";
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <BrandList />
      <ServiceSection />
      <Slider />
      <FeedBack />
      <Footer />
    </>
  );
};

export default Home;
