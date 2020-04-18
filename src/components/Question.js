import React, { useState, useEffect, useContext, useRef, createRef} from 'react'
import Logo from './Logo.js'
import Image from "../assets/Image"
import '../styles/questions.scss';
import PreviousButton from '../assets/PreviousButton.js';
import { PreValueContext, ValueContext } from '../context/ValueContext'

const Question = ({content, index, handleNext}) => {
    const question = content
    const questionIndex = index + 1

    const [selected, setSelected] = useState(false)
    
    const {setValue} = useContext(ValueContext)
    const {preValue, setPreValue} = useContext(PreValueContext)

    const refs = useRef(question.answers.map(() => createRef()))

    const toggleSelected = (i, v, c, cn) => {
        if(refs.current[i]){
            const activeRef = refs.current[i].current;
            if(activeRef !== null) {
                activeRef.classList.add(cn)
                refs.current.map(ref => {
                    if(ref.current !== activeRef){
                        ref.current.classList.remove(cn)
                    }
                })
                setSelected(true)
                setPreValue({ value: v*1.7, category: c, answer: i,})
            } 
        }
    }
    
    const handleSubmit = () => {
        let pa = preValue.value
        let category = preValue.category
        setValue((v) => {
            // The value of the answer will get added to the category times 3
            let categoryValue = v.categories[category] ? v.categories[category] + (pa*3) : pa*3
            let answers = v.answers.push(preValue.answer)
            return {
                ...v,
                value: v.value + pa,
                categories: {
                    ...v.categories,
                    [category]: categoryValue,
                    // answers
                }
            }
        })
        refs.current.map(ref => {
            const classList = ref.current.classList
            if(classList.contains('answer-img')) {
                classList.remove("answer-img--active")
            } else {
                classList.remove("answer--active")
            }
        })
        handleNext()
    }

    const questionNumber = () => questionIndex < 10 ? '0' + questionIndex : questionIndex

    return (
        <div className='questions'>
            <div className="bg-number--big">
                { questionNumber() }
            </div>
            <div className="questions-body">
                <div className="category-name">
                    { question.category }
                </div>
                <div className="title question-title">
                    { question.question}
                </div>
                <div className={`answers ${question.imgAnswers ? 'answers--img' : ''}`}>
                    {question.answers.map((answer, index) => {
                        return question.imgAnswers ? (
                            <Image
                                ref={refs.current[index]}
                                key={index}
                                handleClick={() => toggleSelected(index, answer.value, question.category, "answer-img--active")}
                                className='answer-img'
                                src={process.env.PUBLIC_URL + answer.img.src}
                                alt={answer.img.alt}
                            />
                        ) : (
                            <div
                                ref={refs.current[index]}
                                onClick={() => toggleSelected(index, answer.value, question.category, "answer--active")}
                                className='answer'
                            >
                              {answer.answer}
                            </div>
                        );
                    })}
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
