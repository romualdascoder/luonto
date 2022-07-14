import React from "react";
import "../styles/Dropdown.css";
import { menuData } from "../data/MenuData";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Dropdown = ({ isOpen, toggle }) => {
  //   const dropDownToggleStyle = {
  //     opacity:isOpen?'1':'0',
  //     left:isOpen?'0':'-100%'
  // }

  return (
    <div
      className="dropDownContainer"
      isOpen={isOpen}
      onClick={toggle}
      style={{ opacity: isOpen ? "1" : "0", top: isOpen ? "0" : "-100%" }}
    >
      <div className="icon">
        <FaTimes onClick={toggle} />
      </div>
      <div className="dropDownWrapper">
        <div className="dropDownMenu">
          {menuData.map((item, index) => {
            return (
              <div className="dropDownLink" key={index}>
                <Link to={item.link}> {item.title} </Link>
              </div>
            );
          })}
        </div>
        <div className="btnWrap">
          <div className="dropDownButton">
            <Link to="/contacts">
              <div> Contact Us </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
