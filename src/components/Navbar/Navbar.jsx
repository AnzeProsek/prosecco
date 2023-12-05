import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo1} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li>
          <a className="link" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="link" href="#overview">
            Overview
          </a>
        </li>
        <li>
          <a className="link" href="#location">
            Location
          </a>
        </li>
        <li>
          <a className="link" href="#amenities">
            Amenities
          </a>
        </li>
        <li>
          <a className="link" href="#activities">
            Activities
          </a>
        </li>
        <li>
          <a className="link" href="#floorplan">
            Floor plan
          </a>
        </li>
        <li>
          <a className="link" href="#gallery">
            Gallery
          </a>
        </li>
        <li>
          <a className="link" href="#footer">
            Contact
          </a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <div
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            >
              &#10006;
            </div>
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a
                  href="#home"
                  className="link"
                  onClick={() => setToggleMenu(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#overview"
                  className="link"
                  onClick={() => setToggleMenu(false)}
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="link"
                  onClick={() => setToggleMenu(false)}
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  className="link"
                  onClick={() => setToggleMenu(false)}
                >
                  Amenities
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="link"
                  onClick={() => setToggleMenu(false)}
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="#floorplan"
                  className="link"
                  onClick={() => setToggleMenu(false)}
                >
                  Floor plan
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="link"
                  onClick={() => setToggleMenu(false)}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className="link"
                  onClick={() => setToggleMenu(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
