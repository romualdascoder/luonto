import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faPaperPlane,
  faGlobeAfrica,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

function ContactForm() {
  const [mail, setMail] = useState();

  const mailStatusMessage = () => {
    if (mail === true) {
      return (
        <p className="successMsg">
          Email sent <FontAwesomeIcon icon={faCheck} size="1x" />
        </p>
      );
    } else if (mail === false) {
      return <p className="errMsg">Error, please call: 718-333-6318</p>;
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3jt4flv",
        "gmail",
        e.target,
        "user_rhO57bhyb8f20Y3Zwp8gm"
      )
      .then(
        (result) => {
          if (result.status == 200) {
            setMail(true);
            setTimeout(() => setMail(""), 3000);
          } else {
            setMail(false);
          }
          console.log(result.status);
        },
        (error) => {
          setMail(false);
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contactFormMainContainer">
      <div className="contactFormSecondContainer">
        <div className="contactFormInfoContainer">
          <h1 className="contactTitle">Connect with us</h1>
          <p className="contactFormSecondTitle">
            Our door is always open for a good cup of tea.
          </p>
          <div className="contactIcon">
            <div className="contactIconBorder">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
            </div>
            <p>Bērze 21 Street, Dobele</p>
          </div>
          <div className="contactIcon">
            <div className="contactIconBorder">
              <FontAwesomeIcon icon={faPhoneAlt} size="1x" />
            </div>
            <p>718-333-6318</p>
          </div>
          <div className="contactIcon">
            <div className="contactIconBorder">
              <FontAwesomeIcon icon={faPaperPlane} size="1x" />
            </div>
            <p> info@luonto.com</p>
          </div>
          <div className="contactIcon">
            <div className="contactIconBorder">
              <FontAwesomeIcon icon={faGlobeAfrica} size="1x" />
            </div>
            <p>luonto.com</p>
          </div>
        </div>

        <div className="contactContainer">
          <form onSubmit={sendEmail}>
            <div className="contactColumn">
              <div className="contactFormRows">
                <h1>
                  Please fill out quick form and we will be in touch with
                  lightening speed.
                </h1>
                <input
                  type="text"
                  className=""
                  required
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="contactFormRows">
                <input
                  type="email"
                  className=""
                  required
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="contactFormRows">
                <input
                  type="text"
                  className=""
                  required
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="contactTextarea">
                <textarea
                  className=""
                  placeholder="Message"
                  required
                  name="message"
                ></textarea>
              </div>
              {mailStatusMessage()}
              <div className="">
                <input
                  type="submit"
                  className="contactBtn"
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
