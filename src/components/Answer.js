import React, { useState, useContext } from "react";
import Image from "../assets/Image";
import { PreValueContext } from "../context/ValueContext";

const Answer = ({ content, img, onSelected }) => {
  const [selected, setSelected] = useState(false);
  const {preValue, setPreValue} = useContext(PreValueContext)

  const handleClick = (value) => {
    setPreValue(value)
    setSelected(!selected);
    // Passing the selected state back to the parent
    onSelected(selected)
  };


  if (img) {
    return (
      <Image
        handleClick={() => handleClick(content.value)}
        className={`answer-img ${selected ? "answer-img--active" : ""}`}
        src={process.env.PUBLIC_URL + content.img.src}
        alt={content.img.alt}
      />
    );
  } else {
    return (
      <div
        onClick={() => handleClick(content.value)}
        className={`answer ${selected ? "answer--active" : ""}`}
      >
        {content.answer}
      </div>
    );
  }
};

export default Answer;
