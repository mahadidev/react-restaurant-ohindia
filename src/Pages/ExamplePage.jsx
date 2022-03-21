import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function ExamplePage() {
  return (
    <>
      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <p>Scroll up</p>
      </ParallaxLayer>
    </>
  );
}

export default ExamplePage;
