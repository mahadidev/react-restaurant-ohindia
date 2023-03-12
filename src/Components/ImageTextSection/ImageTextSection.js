// Import Modules
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Parallax, useParallax } from "react-scroll-parallax";

// Import Components
import { Container } from "../Container";
import ParallaxText from "../ParallaxText";

// Import StyleSheet
import "./ImageTextSection.css";

function ImageTextSection({}) {
  const flipImageEffect =
    useParallax <
    HTMLDivElement >
    {
      scaleX: [1, 0, "easeInQuad"],
    };

  return (
    <section>
      <ParallaxText
        className={"section__text__parallax"}
        size={"parallax__large"}
      >
        delectable
      </ParallaxText>
      <Container>
        <Parallax speed={2} className={"section__parallax"}>
          <h1 className={"section__title"}>DELECTABLE</h1>
          <div className={"section__content"}>
            <div className={"row"}>
              <div className={"col col__img"}>
                <div className={"section__img__wrapper"}>
                  <LazyLoadImage
                    className={"section__img"}
                    ref={flipImageEffect.ref}
                    src={"./images/home/cooking.png"}
                  />
                </div>
              </div>
              <div className={"col"}>
                <div className={"section__text"}>
                  <p className={"section__description"}>
                    We want every mouthful to be a supremely satisfying
                    experience that makes you hungry for the next, and leaves
                    you wishing that every meal could be this good.
                  </p>
                </div>
              </div>
            </div>
            <div className={"row"}>
              <div className={"col"}>
                <div className={"section__text"}>
                  <p className={"section__description"}>
                    We want every mouthful to be a supremely satisfying
                    experience that makes you hungry for the next, and leaves
                    you wishing that every meal could be this good.
                  </p>
                </div>
              </div>
              <div className={"col col__img"}>
                <div className={"section__img__wrapper"}>
                  <image
                    className={"section__img"}
                    src={"./images/home/room.png"}
                  />
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </Container>
    </section>
  );
}

export default ImageTextSection;
