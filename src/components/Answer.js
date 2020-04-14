import React, {useState}from "react";
import Image from "../assets/Image"


const Answer = (data) => {
    const [selected, setSelected] = useState(false)
    const handleClick = () => {
        setSelected(!selected)
    }
    if (data.content.img) {
        return (
            <Image
                handleClick={handleClick}
                className={`answer-img ${selected ? 'answer-img--active' : ''}`}
                src={process.env.PUBLIC_URL + data.content.img.src}
                alt={data.content.img.alt}
            />
        )

    } else {
        return (
            <div 
                onClick={() => setSelected(!selected)}
                className={`answer ${selected ? 'answer--active' : ''}`}> 
                {data.content.answer}
            </div>
        )
    }

}

export default Answer;
