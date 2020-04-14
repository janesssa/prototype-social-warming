import React, { useState, useContext} from 'react'
import Logo from './Logo.js'
import Answer from './Answer.js'
import '../styles/questions.scss';
import PreviousButton from '../assets/PreviousButton.js';
import { PreValueContext, ValueContext } from '../context/ValueContext'

const Question = ({content, index, handleNext}) => {
    const question = content
    const questionIndex = index + 1

    const [selected, setSelected] = useState(false)

    const {value, setValue} = useContext(ValueContext)
    const {preValue, setPreValue} = useContext(PreValueContext)
    
    const handleSubmit = () => {
        setValue((v) => v + preValue)
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
                        <Answer content={answer} key={index} img={question.imgAnswers} onSelected={(s) => setSelected(s)} />
                    ))}
                </div>
                <div className="next">
                    <small>Één antwoord mogelijk</small>
                    {/* Todo: Style button when disabled */}
                    <button className="button button--small button--red" onClick={() => handleSubmit()} disabled={!selected}>
                        Volgende
                    </button>
                </div>
            </div>
            <Logo />
        </div>
    )
}

export default Question
