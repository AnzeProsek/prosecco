import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import "./Header.css";

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app-header${showHeader ? " show" : ""}`} id="home">
      <div className="left-content wrapper-transform">
        <h1 className="app-header-h1">Lorem ipsum dolor sit amet.</h1>
        <p className="header-text">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <div className="btn btn-one">
          <span>LOREM IPSUM</span>
        </div>
      </div>
      <div className="right-content img-transform"></div>
      <div className="content-under img-transform">
        <img src={images.oli} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
