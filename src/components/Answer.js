import React from "react";


const Answer = (answerObject) => {

    if (answerObject.content.img) {
        return (
            <img
                src={process.env.PUBLIC_URL + answerObject.content.img.src}
                alt={answerObject.content.img.alt}
            />
        )

    } else {
        return (
            <div className="answer"> {answerObject.content.answer}</div>
        )
    }

}

export default Answer;