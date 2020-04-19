import React from "react";
import "../styles/results.scss";

const Header = ({ text, style }) => {
  return (
    <>
      <div className="header">
        <h3>product naam</h3>
        <small>{text}</small>
      </div>
      <div className="progressbar">
        <div className="inner-progressbar" style={style}></div>
      </div>
    </>
  );
};

export default Header;
