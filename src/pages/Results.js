import React, {useContext} from 'react';
import InsightCard from '../components/InsightCard';
import '../styles/results.scss';
import { ValueContext } from '../context/ValueContext'
import { results } from '../config'

const Results = () => {
    const {value} = useContext(ValueContext)
    const answers = value.answers

    return (
        <div>
            <div className='sm-header'>
                <h1 className='title'>Jouw data, ons inzicht</h1>
                <span className='float-right'>
                    <small>Jouw data waarde</small>
                    <span className='bg-number'>€{value.value.toFixed(2)}</span> 
                </span>
            </div>
            <div className='carousel'>
                {answers.map((answer, i) => (
                    <InsightCard content={results[i]} key={i} answer={answer} />
                ))}
            </div>
        </div>
    )
}

export default Results  