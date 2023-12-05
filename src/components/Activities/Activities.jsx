import React, { useEffect, useState, useRef } from "react";
import images from "../../constants/images";
import "./Activities.css";

const Activities = () => {
  const activitiesRef = useRef(null);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(activitiesRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="activities-section" id="activities">
      <div className="activities-container" ref={activitiesRef}>
        <div className="activities-header">
          <h4>Activities</h4>
          <h2>Find the perfect activity for yourself</h2>
        </div>
        <div className="activities-list">
          <div class="card">
            <div class="front">
              <img className="ikonca" src={images.rafting} alt="header_img" />
              <h3 className="activity-name">Rafting</h3>
            </div>
            <div class="back">
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="front">
              <img
                className="ikonca"
                src={images.paragliding}
                alt="header_img"
              />
              <h3 className="activity-name">Paragliding</h3>
            </div>
            <div class="back">
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="front">
              <img className="ikonca" src={images.canyoning} alt="header_img" />
              <h3 className="activity-name">Canyoning</h3>
            </div>
            <div class="back">
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="front">
              <img className="ikonca" src={images.hiking} alt="header_img" />
              <h3 className="activity-name">Hiking</h3>
            </div>
            <div class="back">
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="front">
              <img className="ikonca" src={images.zipline} alt="header_img" />
              <h3 className="activity-name">Ziplining</h3>
            </div>
            <div class="back">
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="front">
              <img className="ikonca" src={images.skiing} alt="header_img" />
              <h3 className="activity-name">Skiing</h3>
            </div>
            <div class="back">
              <div>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
