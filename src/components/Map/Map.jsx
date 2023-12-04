import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import L from "leaflet";
import { Icon } from "leaflet";

const Map = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const apartmentIcon = new L.Icon({
    iconUrl: images["pinapartment"],
    iconSize: [45, 45],
  });
  const storeIcon = new L.Icon({
    iconUrl: images["pinstore"],
    iconSize: [45, 45],
  });
  const cityIcon = new L.Icon({
    iconUrl: images["pincity"],
    iconSize: [45, 45],
  });
  const hospitalIcon = new L.Icon({
    iconUrl: images["pinhospital"],
    iconSize: [45, 45],
  });
  const restaurantIcon = new L.Icon({
    iconUrl: images["pinrestaurant"],
    iconSize: [45, 45],
  });

  useEffect(() => {
    const locationElement = document.querySelector(".location-container");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            locationElement.classList.add("fadeIn");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(locationElement);

    return () => observer.disconnect();
  }, []);
  const data = [
    {
      title: "The apartment",
      type: "pinapartment2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatum consequuntur doloremque dolor maiores voluptate atque. Accusamus, reiciendis quisquam! Architecto nihil harum nobis quia dolor reprehenderit! Quibusdam inventore sit nesciunt.",
    },
    {
      title: "Shops",
      type: "pinstore2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatum consequuntur doloremque dolor maiores voluptate atque. Accusamus, reiciendis quisquam! Architecto nihil harum nobis quia dolor reprehenderit! Quibusdam inventore sit nesciunt.",
    },
    {
      title: "Hospitals/health centers",
      type: "pinhospital2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatum consequuntur doloremque dolor maiores voluptate atque. Accusamus, reiciendis quisquam! Architecto nihil harum nobis quia dolor reprehenderit! Quibusdam inventore sit nesciunt.",
    },
    {
      title: "City centre",
      type: "pincity2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatum consequuntur doloremque dolor maiores voluptate atque. Accusamus, reiciendis quisquam! Architecto nihil harum nobis quia dolor reprehenderit! Quibusdam inventore sit nesciunt.",
    },
    {
      title: "Restaurants",
      type: "pinrestaurant2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatum consequuntur doloremque dolor maiores voluptate atque. Accusamus, reiciendis quisquam! Architecto nihil harum nobis quia dolor reprehenderit! Quibusdam inventore sit nesciunt.",
    },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="location-component" id="location">
      <div className="location-container">
        <div className="location-component-header">
          <img src={images.location} alt="header_img" />
          <h1>Dvor 44H, 5230 Bovec</h1>
        </div>
        <div className="location-component-content">
          <div className="location-header">
            <div className="location-list">
              {data.map((item, index) => (
                <div
                  className="location-header-text"
                  key={index}
                  onClick={() => handleItemClick(index)}
                >
                  <div className="location-item">
                    <img
                      src={images[item.type]}
                      alt={`${item.type}_icon`}
                      className="location-icon"
                    />
                    <h3>{item.title}</h3>
                  </div>
                  {activeIndex === index && <p>{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="map-section">
            <MapContainer
              center={[46.329986479989046, 13.541293759412671]}
              zoom={15}
              scrollWheelZoom={false}
              style={{ height: "60vh" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[46.329986479989046, 13.541293759412671]}
                icon={apartmentIcon}
              >
                <Popup>The apartment.</Popup>
              </Marker>
              <Marker
                position={[46.331983765828226, 13.540726371708189]}
                icon={storeIcon}
              >
                <Popup>Spar supermarket.</Popup>
              </Marker>
              <Marker
                position={[46.33249787926734, 13.541573949676483]}
                icon={storeIcon}
              >
                <Popup>Mercator supermarket.</Popup>
              </Marker>
              <Marker
                position={[46.3360595192583, 13.548846566400721]}
                icon={hospitalIcon}
              >
                <Popup>Tolmin health Center.</Popup>
              </Marker>
              <Marker
                position={[46.33325015951499, 13.5523979361406]}
                icon={hospitalIcon}
              >
                <Popup>The mountain rescue society.</Popup>
              </Marker>
              <Marker
                position={[46.33821408670257, 13.551958831736827]}
                icon={cityIcon}
              >
                <Popup>City center.</Popup>
              </Marker>
              <Marker
                position={[46.33296338397324, 13.538758963176322]}
                icon={restaurantIcon}
              >
                <Popup>The nearest restaurant.</Popup>
              </Marker>
              <Marker
                position={[46.33820311957127, 13.552963202515978]}
                icon={restaurantIcon}
              >
                <Popup>This street has many restaurants and bars.</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
