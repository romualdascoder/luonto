import React from "react";
import ContactForm from "../components/ContactForm";
import "../styles/ContactsSection.css";
import Slider from "../components/Slider";
import { SliderDataThree } from "../data/SliderData";

function Contacts() {
  return (
    <div className="contactsSection">
      <Slider slides={SliderDataThree} />
      <ContactForm />
    </div>
  );
}

export default Contacts;
