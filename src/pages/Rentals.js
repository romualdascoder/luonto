import React from "react";
import Slider from "../components/Slider";
import { SliderData } from "../data/SliderData";
import { BannerData } from "../data/BannerData";
import Banner from "../components/Banner";
import InfoSection from "../components/InfoSection";
import { InfoDataFour } from "../data/InfoData";
import { NewsData } from "../data/NewsData";
import NewsSection from "../components/NewsSection";
import { NewsDataTitle } from "../data/NewsData";

function Rentals() {
  return (
    <div>
      <Slider slides={SliderData} />
      <NewsSection news={NewsData} {...NewsDataTitle} />
      <Banner {...BannerData} />
      <InfoSection {...InfoDataFour} />
    </div>
  );
}

export default Rentals;
