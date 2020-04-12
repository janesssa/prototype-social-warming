import React, {useState} from 'react'
import Logo from '../components/Logo.js'
import Header from '../components/Header.js'
import  {questions} from '../config';
import Answer from '../components/Answer.js'
import '../styles/questions.scss';
import PreviousButton from '../components/PreviousButton.js';

const Question = () => {
    const categories = ['food', 'sleep', 'sport', 'misc'];
    const [currentCategory, setCurrentCategory] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(1)

    let categoryObject = questions[categories[currentCategory]]
    let questionObject = categoryObject.questions[currentQuestion]

    const nextQuestion = () => {

        setCurrentQuestion(currentQuestion + 1)
        if (!((currentQuestion+1) in categoryObject.questions)) {
            if (currentQuestion === 10) {
                window.location.href = "/results";
            } else {
                setCurrentCategory(currentCategory + 1)
            }
        }
    }
    const previousQuestion = () => {
        setCurrentQuestion(currentQuestion - 1)
        if (currentQuestion === 1) {
            window.location.href = "/";
        }
        else if (!((currentQuestion-1) in categoryObject.questions)) {
            setCurrentCategory(currentCategory - 1)
        }
    }

    const questionNumber = () => {
        return currentQuestion < 10 ? '0' + currentQuestion : currentQuestion
    }

    return (
        <div className='questions'>
            <Header />
            <div className="bg-number">
                { questionNumber() }
            </div>
            <PreviousButton previousQuestion={previousQuestion}/>
            <div className="questions-body">
                <div className="category-name">
                    { categoryObject.title }
                </div>
                <div className="title question-title">
                    { questionObject.question}
                </div>
                <div className={`answers ${questionObject.imgAnswers ? 'answers--img' : ''}`}>
                    {questionObject.answers.map((answerObject, index) => (
                        <Answer content={answerObject} key={index} />
                    ))}
                </div>
                <div className="next">
                    <span className="small-text">Één antwoord mogelijk</span>
                    <div className="button button--small button--red"
                        onClick={() => nextQuestion()}
                         >
                        volgende
                    </div>
                </div>
            </div>
            <Logo />
        </div>
    )
}

export default Question