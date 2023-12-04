import React from "react";
import "./Footer.css";
import { useEffect } from "react";
import images from "../../constants/images";

const Footer = () => {
  useEffect(() => {
    const footerElement = document.querySelector(".footer-container");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            footerElement.classList.add("fadeIn");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(footerElement);

    return () => observer.disconnect();
  }, []);
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-column">
          <img className="footer-logo" src={images.logo1} alt="app__logo" />
          <p className="footer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            expedita.
          </p>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <div className="footer-contact">
            <img className="ikonca" src={images.phone} alt="header_img" />
            <p>+386 51 610 709</p>
          </div>
          <div className="footer-contact">
            <img className="ikonca" src={images.email} alt="header_img" />
            <p>anze.prosek@gmail.com</p>
          </div>
          <div className="footer-contact">
            <img className="ikonca" src={images.location} alt="header_img" />
            <p>Dvor 44H, 5230 Bovec</p>
          </div>
        </div>
        <div className="footer-column">
          <h3>Booking links</h3>
          <div className="footer-contact">
            <img className="ikonca" src={images.booking} alt="header_img" />
            <p>https://booking.com/prosecco</p>
          </div>
          <div className="footer-contact">
            <img className="ikonca" src={images.booking} alt="header_img" />
            <p>https://airbnb.com/prosecco</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="copyright">
        <p>&copy; 2023 Copyright message goes here. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
