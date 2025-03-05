import React from "react";
import Navbar from "../../components/Navbar";
import Particle from "./Particle";
import Banner from "../../components/Banner";
import CryptoStats from "../../components/Cryptostats.jsx";
import About from "../../components/About.jsx";
import HowItWorks from "../../components/HowItWorks.jsx";
import WhatWeDo from "../../components/WhatWeDo.jsx";
import TradingViewWidget from "../../components/TradingViewWidget.jsx";
import ForexCrossRate from "../../components/ForexCrossRate.jsx";

function HomePage() {
  return (
    <>
      <Particle />
      <Navbar />
      <Banner />
      <CryptoStats />
      <About />
      <HowItWorks />
      <WhatWeDo />
      <TradingViewWidget />
      <ForexCrossRate />
    </>
  );
}

export default HomePage;
