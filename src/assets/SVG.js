import React from 'react';

const SVG = ({
        w = "25px", 
        h = "25px", 
        v = "0 0 32 32", 
        fs = "none", 
        xmlns = "http://www.w3.org/2000/svg",
        d,
        fp = "#000"
}) => {
    return (
    <svg 
        width={w} 
        height={h} 
        viewBox={v}
        fill={fs} 
        xmlns={xmlns}
    >
        <path 
            d={d}
            fill={fp}
        />
    </svg>
    )
}

export default SVG