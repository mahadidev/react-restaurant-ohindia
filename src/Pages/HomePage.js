// Import Modules
import React from "react";

// Import Components
import Hero from "../Components/Hero/Hero";
import ImageTextSection from "../Components/ImageTextSection/ImageTextSection";
import { ParallaxProvider } from "react-scroll-parallax";
import ExampleSection from "../Components/ExampleSection/ExampleSection";
import MenuSlider from "../Components/MenuSlider/MenuSlider";
import Gallery from "../Components/Gallery/Gallery";

// Import Data

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImageTextSection />
      <MenuSlider />
      <Gallery />
    </>
  );
}
