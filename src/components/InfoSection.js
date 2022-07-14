import React from "react";
import { Link } from "react-router-dom";
import "../styles/InfoSection.css";
import { AosEffect } from "../helpers/AosEffect";

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
  path,
}) => {
  AosEffect();
  return (
    <div className="section">
      <div className="container">
        <div
          className="columnLeft"
          data-aos="fade-up"
          style={{ order: reverse ? "2" : "1" }}
        >
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <div className="infoSectionButton">
            <Link to={path}> {buttonLabel} </Link>
          </div>
        </div>
        <div
          className="columnRight"
          data-aos="zoom-in"
          data-aos-delay="50"
          reverse={reverse}
          style={{ order: reverse ? "1" : "2" }}
        >
          <img src={image} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
