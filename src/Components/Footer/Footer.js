// Import Modules
import React from "react";

// Import Components
import { Container } from "../Container";
import SocialMedia from "../SocialMedia/SocialMedia";

// Import StyleSheet
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer id={"footer"}>
        <Container className={"footer__container"}>
          <p className={"footer__copyright"}>© 2021 All Rights Reserved</p>
          <p className={"footer__copyright"}>
            developed by{" "}
            <a
              className="developed__text"
              href="https://mahadi.dev"
              target={"_blank"}
              rel="noreferrer"
            >
              MAHADI DEV
            </a>
          </p>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
