import React from "react";
//import Header from "../components/Header/Header";
import Headertest from "../components/Headertest/Headertest";
import Navbar from "../components/Navbar/Navbar";
import Overview from "../components/Overview/Overview";
import FloorPlan from "../components/FloorPlan/FloorPlan";
import "./MainView.css";
import Amenities from "../components/Amenities/Amenities";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";
import Map from "../components/Map/Map";

const MainView = () => {
  return (
    <>
      <Navbar />
      <Headertest />
      <Overview />
      <Amenities />
      <Map />
      <FloorPlan />
      <Gallery />
      <Footer />
    </>
  );
};

export default MainView;
