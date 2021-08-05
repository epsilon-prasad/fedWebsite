import "./title.scss";
import React, { useState } from "react";

const Title = props => {
  const [effect, setEffect] = useState("");
  setTimeout(() => {
    setEffect("effect");
  }, 600);
  return (
    <div className="title">
      <a className={`link link-name ${effect}`} href="">
        <span data-letters-r={props.pageName}>{props.pageName}</span>
      </a>
    </div>
  );
};

export default Title;
