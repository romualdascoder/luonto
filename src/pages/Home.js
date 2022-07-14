import React from "react";
import Slider from "../components/Slider";
import { SliderData } from "../data/SliderData";
import { InfoData } from "../data/InfoData";
import { InfoDataTwo } from "../data/InfoData";
import InfoSection from "../components/InfoSection";
import { NewsData } from "../data/NewsData";
import NewsSection from "../components/NewsSection";
import { NewsDataTitle } from "../data/NewsData";
import { BannerData } from "../data/BannerData";
import Banner from "../components/Banner";

function Home() {
  return (
    <div>
      <Slider slides={SliderData} />
      <InfoSection {...InfoData} />
      <NewsSection news={NewsData} {...NewsDataTitle} />
      <Banner {...BannerData} />
      <InfoSection {...InfoDataTwo} />
    </div>
  );
}

export default Home;
