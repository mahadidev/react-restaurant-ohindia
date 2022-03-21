// Import Modules
import React from "react";

// Import StyleSheet
import "./Container.css";

const SIZE = ["container", "container__large"];

export const Container = ({ children, size, className }) => {
  const checkContainerSize = SIZE.includes(size) ? size : SIZE[0];

  return (
    <>
      <div className={`${checkContainerSize} ${className}`}>{children}</div>
    </>
  );
};
