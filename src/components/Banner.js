import React from "react";
import "../styles/Banner.css";
import { Link } from "react-router-dom";
import { AosEffect } from "../helpers/AosEffect";

function Banner({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  image,
  alt,
  path,
}) {
  AosEffect();
  return (
    <div>
      <div className="bannerSection">
        <div className="bannerContainer">
          <div className="bannerTextContainer">
            <div className="bannerText" data-aos="fade-right">
              <h1>{heading}</h1>
              <p>{paragraphOne}</p>
              <p>{paragraphTwo}</p>
              <Link to={path}>
                <p className="bannerBtn">{buttonLabel}</p>
              </Link>
            </div>
          </div>
          <div className="bannerImage" data-aos-delay="50" data-aos="fade-left">
            <img src={image} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
