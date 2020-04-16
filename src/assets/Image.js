import React, {forwardRef} from "react"

const Image = forwardRef(({ src, alt, className, handleClick}, ref) => {
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      onClick={() =>{handleClick()}}
    />
  )
})

export default Image;