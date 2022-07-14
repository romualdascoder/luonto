import React from "react";
import "../styles/NewsSection.css";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import { AosEffect } from "../helpers/AosEffect";

function NewsSection({ news, title }) {
  AosEffect();
  return (
    <div className="newsSection">
      <div className="newsTitle">
        <h1 data-aos="fade-right">{title}</h1>
      </div>
      <div className="newsContainer">
        {news.map((item, index) => {
          return (
            <div className="newsWrapper" data-aos="fade-up" key={index}>
              <img src={item.image} alt={item.alt} />
              <div>
                <h1>{item.heading}</h1>
                <Link to={item.path}>
                  <p>
                    {item.buttonLabel}
                    <IoArrowForward />
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsSection;
