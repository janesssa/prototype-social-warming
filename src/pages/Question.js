import React, {useState} from 'react'
import Logo from '../components/Logo.js'
import Answer from '../components/Answer.js'
import '../styles/questions.scss';
import PreviousButton from '../assets/PreviousButton.js';

const Question = (question) => {

    const nextQuestion = () => {
        // setCurrentQuestion(currentQuestion + 1)
        // if (!((currentQuestion+1) in categoryObject.questions)) {
        //     if (currentQuestion === 10) {
        //         window.location.href = "/results";
        //     } else {
        //         setCurrentCategory(currentCategory + 1)
        //     }
        // }
    }
    const previousQuestion = () => {
        // setCurrentQuestion(currentQuestion - 1)
        // if (currentQuestion === 1) {
        //     window.location.href = "/";
        // }
        // else if (!((currentQuestion-1) in categoryObject.questions)) {
        //     setCurrentCategory(currentCategory - 1)
        // }
    }

    const questionNumber = () => {
        return question.content.number < 10 ? '0' + question.content.number : question.content.number
    }

    return (
        <div className='questions'>
            <div className="bg-number">
                { questionNumber() }
            </div>
            <PreviousButton previousQuestion={previousQuestion}/>
            <div className="questions-body">
                <div className="category-name">
                    { question.content.category }
                </div>
                <div className="title question-title">
                    { question.content.question}
                </div>
                <div className={`answers ${question.content.imgAnswers ? 'answers--img' : ''}`}>
                    {question.content.answers.map((answer, index) => (
                        <Answer content={answer} key={index} />
                    ))}
                </div>
                <div className="next">
                    <small>Één antwoord mogelijk</small>
                    <div className="button button--small button--red"
                        onClick={() => nextQuestion()}
                         >
                        Volgende
                    </div>
                </div>
            </div>
            <Logo />
        </div>
    )
}

export default Question
