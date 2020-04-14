import React from "react"

const Image = ({ src, alt, className, handleClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={() =>{handleClick()}}
    />
  )
}

export default Image;