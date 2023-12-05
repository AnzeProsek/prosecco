import React, { useEffect, useState, useRef } from "react";
import images from "../../constants/images";
import "./Header.css";

const Headertest = () => {
  const headerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

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

    observer.observe(headerRef.current);
    observer.observe(leftRef.current);
    observer.observe(rightRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-header" id="home" ref={headerRef}>
      <div className="left-content" ref={leftRef}>
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
      <div className="right-content" ref={rightRef}></div>
      <div className="content-under">
        <img src={images.oli} alt="header_img" />
      </div>
    </div>
  );
};

export default Headertest;
