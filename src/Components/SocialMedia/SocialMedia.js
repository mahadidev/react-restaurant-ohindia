// Import Modules
import React from "react";

// Import Data
import { SocialMediaData } from "../../Data/SiteBasicData";

// Import StyleSheet
import "./SocialMedia.css";

function SocialMedia({ className }) {
  return (
    <>
      <div className={`social__media ${className}`}>
        {SocialMediaData && (
          <>
            <a className={"social__media__item fab fa-facebook-f"}></a>
            <a className={"social__media__item fab fa-instagram"}></a>
            <a className={"social__media__item fa fa-tripadvisor"}></a>
          </>
        )}
      </div>
    </>
  );
}

export default SocialMedia;
