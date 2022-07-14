import React from "react";
import Slider from "../components/Slider";
import { SliderDataTwo } from "../data/SliderData";
import InfoSection from "../components/InfoSection";
import { InfoDataThree } from "../data/InfoData";

function About() {
  return (
    <div>
      <Slider slides={SliderDataTwo} />
      <InfoSection {...InfoDataThree} />
    </div>
  );
}

export default About;
