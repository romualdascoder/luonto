import React, { useEffect, useState, useRef } from "react";
import "../styles/Slider.css";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <div className="sliderWrapper">
        {slides.map((slide, index) => {
          return (
            <div className="slideContainer" key={index}>
              {index === current && (
                <div className="slide">
                  <img src={slide.image} alt={slide.alt} />
                  <div className="sliderContent">
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <Link to={slide.path}>
                      <div className="slideBtn">
                        {slide.label}
                        <IoArrowForward />
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className="sliderBtns">
          <IoArrowBack onClick={prevSlide} />
          <IoArrowForward onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
