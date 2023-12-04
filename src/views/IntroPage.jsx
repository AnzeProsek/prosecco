import React from "react";
import "./IntroPage.css";
import images from "../constants/images";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IntroPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const totalAnimationDuration = 5000;

    const timeoutId = setTimeout(() => {
      navigate("/main");
    }, totalAnimationDuration);

    return () => clearTimeout(timeoutId);
  }, [navigate]);
  return (
    <div className="intro-body">
      <div className="container">
        <div className="levo">
          <img className="slikica" alt="vino" src={images.wine}></img>
        </div>
        <div className="desno">
          <h1>
            PROSECCO <span></span>
          </h1>
          <h1>
            APARTMENTS <span></span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
