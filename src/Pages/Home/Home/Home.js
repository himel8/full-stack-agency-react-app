import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import BrandList from "../BrandList/BrandList";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <BrandList />
      <Footer />
    </>
  );
};

export default Home;
