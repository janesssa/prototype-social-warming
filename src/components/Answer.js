import React, {useState}from "react";


const Answer = (data) => {
    const [selected, setSelected] = useState(false)
    if (data.content.img) {
        return (
            <img
                onClick={() => setSelected(!selected)}
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
