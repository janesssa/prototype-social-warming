import React, { useContext } from "react";
import "../styles/results.scss";
import { PreValueContext, ValueContext } from "../context/ValueContext";

const Header = ({ text, style, handleNext}) => {
  const {preValue, setPreValue} = useContext(PreValueContext)
  const {value, setValue} = useContext(ValueContext)
  return (
    <>
      <div className="header">
        <h3>product naam</h3>
        <small>{JSON.stringify(preValue)}</small>
        <small>{JSON.stringify(value)}</small>
        <small onClick={() => handleNext()}>{text}</small>
      </div>
      <div className="progressbar">
        <div className="inner-progressbar" style={style}></div>
      </div>
    </>
  );
};

export default Header;
