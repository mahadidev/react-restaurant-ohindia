// Import Modules
import React, { Children } from "react";
import { Link } from "react-router-dom";

// Import StyleSheet
import "./Button.css";

const BUTTON_COLOR = ["btn__primary", "btn__white__outline"];
const BUTTON_SIZE = ["", "btn__small", "btn__large"];

function Button({ children, className, color, size, type, to, onClick }) {
  const checkBtnColor = BUTTON_COLOR.includes(color) ? color : BUTTON_COLOR[0];

  const checkBtnSize = BUTTON_SIZE.includes(size) ? size : BUTTON_SIZE[0];

  if (type == "button" || !type) {
    return (
      <>
        <button
          className={`btn ${checkBtnColor} ${checkBtnSize} ${
            className && className
          }`}
          type={"button"}
          onClick={onClick}
        >
          {children}
        </button>
      </>
    );
  }

  if (type == "link") {
    return (
      <>
        <Link
          className={`btn ${checkBtnColor} ${checkBtnSize} ${
            className && className
          }`}
          type={"button"}
          to={to}
        >
          {children}
        </Link>
      </>
    );
  }
}

export default Button;
