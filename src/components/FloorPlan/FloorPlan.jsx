import React from "react";
import { useEffect } from "react";
import images from "../../constants/images";
import "./FloorPlan.css";

const FloorPlan = () => {
  useEffect(() => {
    const floorplanUpperElement = document.querySelector(".floorplan-upper");
    const floorplanLowerElement = document.querySelector(".floorplan-lower");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            floorplanUpperElement.classList.add("fadeIn");
            floorplanLowerElement.classList.add("fadeIn");
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(floorplanUpperElement);
    observer.observe(floorplanLowerElement);

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);
  return (
    <div className="floorplan" id="floorplan">
      <div className="floorplan-upper">
        <div className="floorplan-title">
          <h1>Floor plan</h1>
        </div>
        <div className="floorplan-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            aut!
          </p>
        </div>
      </div>
      <div className="floorplan-lower">
        <div className="floorplan-stats">
          <ul className="stats-list">
            <li className="stats-list-item">
              <h3 className="stat">Floor Number</h3>
              <h3 className="stat">1</h3>
            </li>
            <li className="stats-list-item">
              <h3 className="stat">Apartment Number</h3>
              <h3 className="stat">1</h3>
            </li>
            <li className="stats-list-item">
              <h3 className="stat">Bathrooms</h3>
              <h3 className="stat">2</h3>
            </li>
            <li className="stats-list-item">
              <h3 className="stat">Bedrooms</h3>
              <h3 className="stat">2</h3>
            </li>
            <li className="stats-list-item">
              <h3 className="stat">Parking</h3>
              <h3 className="stat">Yes</h3>
            </li>
            <li className="stats-list-item">
              <h3 className="stat">Total area</h3>
              <h3 className="stat">X sqm</h3>
            </li>
          </ul>
        </div>
        <div className="floorplan-image">
          <img className="plan" src={images.plan} alt="plan_img" />
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
