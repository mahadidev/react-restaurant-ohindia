// Import Modules
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCube,
  Keyboard,
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Components
import Button from "../Button";
import ParallaxText from "../ParallaxText";

// Import StyleSheet
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MenuSlider.css";

function MenuSlider() {
  return (
    <section id={"menu__slider"}>
      <div className={"menu__slider__left"}>
        <ParallaxText className={"menu__parallax__text"}>
          what's on
        </ParallaxText>
      </div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={500}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        navigation={false}
        pagination={true}
        keyboard={{ enabled: true }}
        modules={[
          EffectCube,
          Pagination,
          Navigation,
          Keyboard,
          EffectFade,
          Autoplay,
        ]}
        className={"menu__slider"}
        effect={"cube"}
        autoplay={true}
      >
        <SwiperSlide className={"menu__slide"}>
          <div className={"menu__slide__img__wrapper"}>
            <LazyLoadImage
              className={"menu__slide__img"}
              src={"./images/Home/menu__slide__1.jpg"}
            />
          </div>
          <div className={"menu__slide__text__wrapper"}>
            <h2 className={"menu__slide__title"}>
              What’s on at The Block House
            </h2>
            <p className={"menu__slide__description"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Button type={"link"} to={"menu"} color={"btn__white__outline"}>
              View Menu
            </Button>
          </div>
        </SwiperSlide>
        <SwiperSlide className={"menu__slide"}>
          <div className={"menu__slide__img__wrapper"}>
            <LazyLoadImage
              className={"menu__slide__img"}
              src={"./images/Home/menu__slide__2.jpg"}
            />
          </div>
          <div className={"menu__slide__text__wrapper"}>
            <h2 className={"menu__slide__title"}>Sunday’s at the Blockhouse</h2>
            <p className={"menu__slide__description"}>
              A SUNDAY WELL SPENT BRINGS A WEEK OF CONTENT!
            </p>
            <Button type={"link"} to={"menu"} color={"btn__white__outline"}>
              View Menu
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default MenuSlider;
