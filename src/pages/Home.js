import React from "react";
import Hero from "../components/Hero";
import Scroll from "../components/Scroll";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <Scroll type="All" />
        <Scroll type="Action" />
        <Scroll type="Horror" />
        <Scroll type="Comedey" />
        <div className="space"></div>
      </div>
    </>
  );
}
