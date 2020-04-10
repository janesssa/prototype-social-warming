import React, { useState, useEffect } from "react";
import "../styles/results.scss";

const Header = () => {
    const sections = ['Vraag 1 van 15','Vraag 2 van 15','Vraag 2 van 15','Vraag 3 van 15','Vraag 4 van 15','Vraag 1 van 15','Vraag 2 van 15','Vraag 3 van 15','Vraag 5 van 15','Resultaten', 'Wat betekent dit?']
    const [width, setWidth] = useState(10)
    const [style, setStyle] = useState()
    const [section, setSection] = useState(0)
    const [text, setText] = useState(sections[section])

    const handleNext = () => {
        if(width < 101 && section < sections.length) {
            setSection((s) => s + 1)
            setWidth((w) => w + 9)
            setStyle({width: width + '%'})
            setText(sections[section])
        } 
    }
    
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
