import React, {useState}from "react";


const Answer = (data) => {
    const [selected, setSelected] = useState(false)
    if (answerObject.content.img) {
        return (
            <img
                onClick={() => setSelected(!selected)}
                className={`answer-img ${selected ? 'answer-img--active' : ''}`}
                src={process.env.PUBLIC_URL + answerObject.content.img.src}
                alt={answerObject.content.img.alt}
            />
        )

    } else {
        return (
            <div 
                onClick={() => setSelected(!selected)}
                className={`answer ${selected ? 'answer--active' : ''}`}> 
                {answerObject.content.answer}
            </div>
        )
    }

}

export default Answer;
