import React, { useEffect, useState, useRef } from "react";
import images from "../../constants/images";
import "./Activities.css";

const Activities = () => {
  useEffect(() => {
    const activitiesElement = document.querySelector(".activities-container");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activitiesElement.classList.add("fadeIn");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(activitiesElement);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="activities-section" id="activities">
      <div className="activities-container">
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
