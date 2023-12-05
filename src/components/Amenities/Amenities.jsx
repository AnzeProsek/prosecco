import React from "react";
import images from "../../constants/images";
import { useEffect } from "react";
import "./Amenities.css";

const Amenities = () => {
  useEffect(() => {
    const amenitiesElement = document.querySelector(".amenities-list");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            amenitiesElement.classList.add("fadeIn");
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    observer.observe(amenitiesElement);

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);
  return (
    <div className="amenities" id="amenities">
      <div className="amenities-list">
        <div className="amenities-header">
          <h2>Apartment's amenities</h2>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <div class="btn btn-one">
            <span>LOREM IPSUM</span>
          </div>
        </div>
        <div className="amenity">
          <img className="ikonca" src={images.wifiicon} alt="header_img" />
          <h2>High-speed internet</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            quibusdam!
          </p>
        </div>
        <div className="amenity">
          <img className="ikonca" src={images.smarthome} alt="header_img" />
          <h2>Smart home</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            quibusdam!
          </p>
        </div>
        <div className="amenity">
          <img className="ikonca" src={images.sauna} alt="header_img" />
          <h2>Sauna</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            quibusdam!
          </p>
        </div>
        <div className="amenity">
          <img className="ikonca" src={images.shops} alt="header_img" />
          <h2>Nearby shops</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            quibusdam!
          </p>
        </div>
        <div className="amenity">
          <img className="ikonca" src={images.caricon} alt="header_img" />
          <h2>Garage</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            quibusdam!
          </p>
        </div>
        <div className="amenity">
          <img className="ikonca" src={images.chargericon} alt="header_img" />
          <h2>Charging station</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            quibusdam!
          </p>
        </div>
        <div className="amenity">
          <img className="ikonca" src={images.klima} alt="header_img" />
          <h2>Air conditioning</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            quibusdam!
          </p>
        </div>
        <div className="amenity">
          <img className="ikonca" src={images.balcony} alt="header_img" />
          <h2>Private balcony</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            quibusdam!
          </p>
        </div>
        <div className="amenity">
          <img className="ikonca" src={images.wine} alt="header_img" />
          <h2>Complimentary bottle</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            quibusdam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
