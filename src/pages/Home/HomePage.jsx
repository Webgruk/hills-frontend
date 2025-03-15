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
import InvestmentCarousel from "../../components/InvestmentOption.jsx";
import CompanyIntro from "../../components/Intro.jsx";
import InvestmentPlans from "../../components/InvestmentPlans.jsx";
import FAQSection from "../../components/FaqSection.jsx";
import Footer from "../../components/Footer.jsx";
function HomePage() {
  return (
    <>
      <Particle />
      <Navbar />
      <Banner />
      <CryptoStats />
      <About />
      <CompanyIntro />
      <HowItWorks />
      <WhatWeDo />
      <TradingViewWidget />
      <ForexCrossRate />
      <InvestmentCarousel />
      <InvestmentPlans />
      <FAQSection />
      <Footer />
    </>
  );
}

export default HomePage;
