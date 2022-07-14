import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footerSection">
      <div className="footerContainer">
        <div className="footerTitle">
          <h1>Let's find your Eco-Friendly Apartment</h1>
          <div className="footerSocialMediaIcons">
            <div>
              <FaFacebook />
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaYoutube />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div>
          <p className="footerBoldText">Contact Us</p>
          <Link to="/about">
            <p>FAQ</p>
          </Link>
          <Link to="/about">
            <p>Support</p>
          </Link>
          <Link to="/about">
            <p>Questions</p>
          </Link>
        </div>
        <div>
          <p className="footerBoldText">Offices</p>
          <p>Lithuania</p>
          <p>Latvia</p>
          <p>Estonia</p>
          <div className="footerBtn">
            <Link to="/contacts">Let's Chat</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
