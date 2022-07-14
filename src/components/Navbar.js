import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import "../styles/Navbar.css";
import MobileMenuBtn from "../assets/bar.svg";
import Dropdown from "../components/Dropdown";
import Logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const changeNavbarBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <div className="menu">
        {menuData.map((item, index) => {
          return (
            <div className="menuLinks" key={index}>
              <Link to={item.link}> {item.title} </Link>
            </div>
          );
        })}
      </div>
      <div className="mobileMenuBtn" onClick={toggle}>
        {" "}
        <img src={MobileMenuBtn} alt="mobile" />{" "}
      </div>
      <div className="button">
        <Link to="/contacts"> Contact Us </Link>
      </div>
      <Dropdown isOpen={isOpen} toggle={toggle} />
    </div>
  );
}

export default Navbar;
