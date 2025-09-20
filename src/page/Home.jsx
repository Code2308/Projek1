import React from "react";
import HeroSlider from "../components/HeroSlider";
import Gallery from "./Gallery";
import Review from "../components/Review";
import WhyChooseUs from "../components/WhyChooseUs";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="relative z-10 flex flex-col">
        {/* HeroSlider tanpa padding extra biar langsung nempel ke Navbar */}
        <HeroSlider />
        <WhyChooseUs />
        <Card />
        <Review />
        <Gallery />
      </div>
    </div>
  );
}
