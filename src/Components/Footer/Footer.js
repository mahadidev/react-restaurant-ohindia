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
          <p className={"footer__copyright"}>All rights reserved.</p>
          <SocialMedia />
        </Container>
      </footer>
    </>
  );
}

export default Footer;
