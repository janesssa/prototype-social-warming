import React from "react";
import "../styles/results.scss";

const Header = ({ text, style, handleNext}) => {
  return (
    <>
      <div className="header">
        <h3>product naam</h3>
        <small onClick={() => handleNext()}>{text}</small>
      </div>
      <div className="progressbar">
        <div className="inner-progressbar" style={style}></div>
      </div>
    </>
  );
};

export default Header;
