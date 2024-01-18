import React from "react";
import HomeHero from "./homeHero";
import HomeAbout from "./homeAbout";
import HomePricing from "./homePricing";
import PortfolioBlock from "./repeatable/portfolioBlock";
import HomeTouch from "./homeTouch";



export default function Home() {
  return (
    <>
    <HomeHero />
      <HomeAbout />
      <HomePricing />
     <PortfolioBlock />
     <HomeTouch />
    </>
  );
}
