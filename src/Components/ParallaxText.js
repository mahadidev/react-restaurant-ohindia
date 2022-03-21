// Import Modules
import React from "react";
import { ParallaxProvider, Parallax, useParallax } from "react-scroll-parallax";

// Import StyleSheet
import "./ParallaxText.css";

const PARALLAX_COLOR = [
  "parallax__gray",
  "parallax__primary",
  "parallax__white",
];

const PARALLAX_SIZE = ["", "parallax__large"];

function ParallaxText({ children, color, size, className }) {
  const checkParallaxColor = PARALLAX_COLOR.includes(color)
    ? color
    : PARALLAX_COLOR[0];
  const checkParallaxSize = PARALLAX_SIZE.includes(size)
    ? size
    : PARALLAX_SIZE[0];

  return (
    <>
      <Parallax
        className={`parallax__text ${checkParallaxColor} ${checkParallaxSize} ${className}`}
        speed={-20}
      >
        {children}
      </Parallax>
    </>
  );
}

export default ParallaxText;
