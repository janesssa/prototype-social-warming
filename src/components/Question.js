import React, {useContext} from 'react'
import Logo from './Logo.js'
import Answer from './Answer.js'
import '../styles/questions.scss';
import PreviousButton from '../assets/PreviousButton.js';
import {ValueContext } from '../context/ValueContext'

const Question = ({content, index, handleNext}) => {
    const question = content
    const questionIndex = index + 1

    const {value, setValue} = useContext(ValueContext)
    
    const handleSubmit = ({value}) => {
        setValue((v) => v + value)
        handleNext()
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
        return questionIndex < 10 ? '0' + questionIndex : questionIndex
    }

    return (
        <div className='questions'>
            <div className="bg-number--big">
                { questionNumber() }
            </div>
            <PreviousButton previousQuestion={previousQuestion}/>
            <div className="questions-body">
                <div className="category-name">
                    { question.category }
                </div>
                <div className="title question-title">
                    { question.question}
                </div>
                <div className={`answers ${question.imgAnswers ? 'answers--img' : ''}`}>
                    {question.answers.map((answer, index) => (
                        <Answer content={answer} key={index} img={question.imgAnswers} />
                    ))}
                </div>
                <div className="next">
                    <small>Één antwoord mogelijk</small>
                    <div className="button button--small button--red"
                        onClick={() => handleSubmit(1)}
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
