import React, {useState} from 'react'
import Logo from '../components/Logo.js'
import Header from '../components/Header.js'
import  {questions} from '../config';
import '../styles/questions.scss';

const Question = () => {
    const categories = ['food', 'sleep', 'sport', 'misc'];
    const [currentCategory, setCurrentCategory] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(1)
    let previousButton;

    let categoryObject = questions[categories[currentCategory]]
    let questionObject = categoryObject.questions[currentQuestion]

    const nextQuestion = () => {

        setCurrentQuestion(currentQuestion + 1)
        if (!((currentQuestion+1) in categoryObject.questions)) {
            if (currentQuestion === 10) {
                console.log('finish test')
            } else {
                setCurrentCategory(currentCategory + 1)
            }
        }
    }
    const previousQuestion = () => {
        setCurrentQuestion(currentQuestion - 1)
        if (!((currentQuestion-1) in categoryObject.questions)) {
            setCurrentCategory(currentCategory - 1)
        }
    }

    const questionNumber = () => {
        return currentQuestion < 10 ? '0' + currentQuestion : currentQuestion
    }

        if (currentQuestion !== 1) {
            previousButton = <div className="previous-button" onClick={() => previousQuestion()}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538407 7.04738 0.538407 6.65686 0.928931L0.292893 7.29289ZM17 7L1 7L1 9L17 9L17 7Z" fill="black" fill-opacity="0.5"/>
            </svg>
        </div>  
        }

    return (
        <div className='questions'>
            <Header />
            <div className="background-number">
                { questionNumber() }
            </div>
                {previousButton}
            <div className="questions-body">
                <div className="category-name">
                    { categoryObject.title }
                </div>
                <div className="title question-title">
                    { questionObject.question}
                </div>
                <div className={`answers ${questionObject.imgAnswers ? 'answers--img' : ''}`}>
                    {questionObject.answers.map((answerObject, index) => {
                        if (questionObject.imgAnswers) {
                            console.log(answerObject)
                        return <img key={index}
                            src={process.env.PUBLIC_URL + answerObject.img.src}
                            alt={answerObject.img.alt}
                         />
                        } else {
                            return <div className="answer" key={index}> {answerObject.answer}</div>
                        }
                    })}
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