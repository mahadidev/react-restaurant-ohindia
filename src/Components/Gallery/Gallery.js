// Import Modules
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageGallery from "react-image-gallery";

// Import Components
import { Container } from "../Container";
import ParallaxText from "../ParallaxText";

// Import Data
import { GalleryImg } from "../../Data/GallleryImage";

// Import StyleSheet
import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallery.css";

function Gallery() {
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const ShowGalleryModal = (e) => {
    setShowGalleryModal(e.target.src);
  };

  return (
    <>
      <section id={"gallery"}>
        <ParallaxText
          className={"gallery__parallax__text"}
          size={"parallax__large"}
        >
          Gallery
        </ParallaxText>
        <Container size={"container__large"}>
          <div className={"gallery__wrapper"}>
            {GalleryImg &&
              GalleryImg.map((item) => {
                return (
                  <div className={"gallery__item"}>
                    <LazyLoadImage
                      key={item.id}
                      className={"gallery__item__img"}
                      src={item.src}
                      onClick={ShowGalleryModal}
                    />
                  </div>
                );
              })}
          </div>
          {showGalleryModal && (
            <div className={"gallery__modal__wrapper"}>
              <span
                className={"gallery__modal__close fas fa-times"}
                onClick={() => {
                  setShowGalleryModal(false);
                }}
              ></span>
              <div className={"gallery__modal"}>
                <LazyLoadImage
                  className={"gallery__modal__img"}
                  src={showGalleryModal}
                  onClick={ShowGalleryModal}
                />
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}

export default Gallery;
