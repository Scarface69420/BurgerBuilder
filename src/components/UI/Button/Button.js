import React from "react";
import "./Button.css";

const button = (props) => {
  let arr = [props.btnType];
  return (
    <button
      disabled={props.disabled}
      className={["Button", arr].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
