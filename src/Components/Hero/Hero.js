// Import Modules
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Keyboard, Navigation, Pagination } from "swiper";
import { animated, config, useSpring } from "react-spring";

// Import StyleSheet
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Hero.css";

export default function Hero() {
  const [animateOpacity, setAnimateOpacity] = useState(0);
  const [animateTransform, setAnimateTransform] =
    useState("skew(-90deg, 0deg)");

  const titleAnimation = useSpring({
    to: { opacity: animateOpacity, transform: animateTransform },
    from: { opacity: 0, transform: "skew(-50deg, 0deg)" },
    delay: 200,
    config: config.molasses,
  });

  // Change Slide
  const slideAnimate = () => {
    setAnimateOpacity(1);
    setAnimateTransform("skew(0deg, 0deg)");
  };

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={1200}
        navigation={true}
        effect={"fade"}
        grabCursor={true}
        keyboard={{ enabled: true }}
        modules={[EffectFade, Pagination, Navigation, Keyboard]}
        className={"hero__slider"}
        onSlideChange={slideAnimate}
        onSwiper={slideAnimate}
      >
        <SwiperSlide
          className={"hero__slide"}
          style={{ backgroundImage: "url(./images/Home/hero__banner__1.png)" }}
        >
          <div className={"hero__slide__overly"}>
            <animated.div
              className={"hero__slide__content"}
              style={titleAnimation}
            >
              <h2 className={"hero__title"}>Great Food</h2>
              <p className={"hero__description"}>
                The <span>True Taste</span> of India
              </p>
            </animated.div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={"hero__slide"}
          style={{ backgroundImage: "url(./images/Home/hero__banner__2.png)" }}
        >
          <div className={"hero__slide__overly"}>
            <animated.div
              className={"hero__slide__content"}
              style={titleAnimation}
            >
              <h2 className={"hero__title"}>Great Food</h2>
              <p className={"hero__description"}>
                The <span>True Taste</span> of India
              </p>
            </animated.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
