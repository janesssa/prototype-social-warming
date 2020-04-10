import React from 'react'
import Logo from '../components/Logo.js'
import Header from '../components/Header.js'
import  {questions} from '../config';
import '../styles/questions.scss';

const Question = () => {
    const categories = ['food', 'sleep', 'sport', 'misc'];
    let currentCategory = 0;
    let currentQuestion = 1;

    let categoryObject = questions[categories[currentCategory]]
    let questionObject = categoryObject.questions[currentQuestion]

    const nextQuestion = () => {
        //werkt niet
        currentQuestion ++
        questionObject = categoryObject.questions[currentQuestion]
        //als currentquestion niet in de het object staat next category
    }

    const questionNumber = () => {
        return currentQuestion < 10 ? '0' + currentQuestion : currentQuestion
    }
    return (
        <div className='questions'>
            <Header />
            <div className="background-number">
                { questionNumber() }
            </div>
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
                        onClick={() => nextQuestion()} >
                        volgende
                    </div>
                </div>
            </div>
            <Logo />
        </div>
    )
}

export default Question