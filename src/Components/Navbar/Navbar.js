// Import Modules
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

// Import Compoents
import Button from "../Button";
import SocialMedia from "../SocialMedia/SocialMedia";

// Import StyleSheet
import "./Navbar.css";

function Navbar({ slideLogo, button, menu }) {
  // Devide Menu
  const menuLenght = menu.length;
  const menuDevide = Math.floor(menuLenght / 2);

  // Hamburger Controller
  const [hamburgerClass, setHamburgerClass] = useState("");
  const [hamburger__icon, setHamburgerIcon] = useState("fas fa-bars");
  const HamBurgerController = () => {
    if (hamburgerClass) {
      setHamburgerClass("");
      setHamburgerIcon("fas fa-bars");
    } else {
      setHamburgerClass("hamburger__open");
      setHamburgerIcon("fas fa-times");
    }
  };

  return (
    <>
      <nav id={"navbar"} className={`navbar ${hamburgerClass}`}>
        <div className={"navbar__grid"}>
          <div className={"navbar__grid__item navbar__left"}>
            <LazyLoadImage className="navbar__left__logo" src={slideLogo} />
            {/* Hamburger */}
            <div className={"hamburger"}>
              <span
                className={`hamburger__icon ${hamburger__icon}`}
                onClick={HamBurgerController}
              ></span>
              <div className={"hamburger__sidebar"}>
                <ul className={"hamburger__menu"}>
                  {menu.map((menuItem) => {
                    return (
                      <Link
                        className={"hamburger__menu__link"}
                        to={menuItem.id}
                        key={menuItem.id}
                      >
                        {menuItem.label}
                      </Link>
                    );
                  })}
                </ul>
                <LazyLoadImage
                  className="hamburger__logo"
                  src={"./images/logo__slide__white.png"}
                />
                <SocialMedia className={"hamburger__social__media"} />
              </div>
            </div>
            {/* !Hamburger */}
          </div>
          <div className={"navbar__grid__item navbar__middle"}>
            <ul className={"navbar__menu navbar__menu__left"}>
              {menu.map((menuItem) => {
                // left menu
                if (menuItem.id <= menuDevide) {
                  return (
                    <Link
                      className={"navbar__menu__link"}
                      to={menuItem.link}
                      key={menuItem.id}
                    >
                      {menuItem.label}
                    </Link>
                  );
                }
              })}
            </ul>
            {/* <LazyLoadImage className={"navbar__logo"} src={mainLogo} /> */}
            <Link className={"navbar__logo__text"} to={"/"}>
              Oh India
            </Link>
            <ul className={"navbar__menu navbar__menu__right"}>
              {menu.map((menuItem) => {
                // right menu
                if (menuItem.id > menuDevide) {
                  return (
                    <Link
                      className={"navbar__menu__link"}
                      to={menuItem.link}
                      key={menuItem.id}
                    >
                      {menuItem.label}
                    </Link>
                  );
                }
              })}
            </ul>
          </div>
          <div className={"navbar__grid__item navbar__right"}>
            <Link
              className={`hamburger__right__btn hamburger__icon ${button.icon}`}
              to={button.url}
            />
            <Button
              className={"navbar__btn"}
              type={"link"}
              to={"./"}
              color={"btn__white__outline"}
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
