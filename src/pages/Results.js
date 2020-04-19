import React, {useContext} from 'react';
import InsightCard from '../components/InsightCard';
import '../styles/results.scss';
import { ValueContext } from '../context/ValueContext'

const insights = [
    {
        id: 736,
        title: 'Vraag 1',
        content: [
            '0Dit is ons inzicht over de vraag en gedoe.',
            '1Dit is ons inzicht over de vraag en gedoe.',
            '2Dit is ons inzicht over de vraag en gedoe.',
        ]
    },
    {
        id: 841,
        title: 'Vraag 2',
        content: [
            '0Dit is ons inzicht over de vraag en gedoe.',
            '1Dit is ons inzicht over de vraag en gedoe.',
            '2Dit is ons inzicht over de vraag en gedoe.',
        ]
    },
    {
        id: 267,
        title: 'Vraag 3',
        content: [
            '0Dit is ons inzicht over de vraag en gedoe.',
            '1Dit is ons inzicht over de vraag en gedoe.',
            '2Dit is ons inzicht over de vraag en gedoe.',
        ]
    },
    {
        id: 745,
        title: 'Vraag 4',
        content: [
            '0Dit is ons inzicht over de vraag en gedoe.',
            '1Dit is ons inzicht over de vraag en gedoe.',
            '2Dit is ons inzicht over de vraag en gedoe.',
        ]
    },
    {
        id: 451,
        title: 'Vraag 5',
        content: [
            '0Dit is ons inzicht over de vraag en gedoe.',
            '1Dit is ons inzicht over de vraag en gedoe.',
            '2Dit is ons inzicht over de vraag en gedoe.',
        ]
    },
    {
        id: 348,
        title: 'Vraag 6',
        content: [
            '0Dit is ons inzicht over de vraag en gedoe.',
            '1Dit is ons inzicht over de vraag en gedoe.',
            '2Dit is ons inzicht over de vraag en gedoe.',
        ]
    },
    {
        id: 663,
        title: 'Vraag 7',
        content: [
            '0Dit is ons inzicht over de vraag en gedoe.',
            '1Dit is ons inzicht over de vraag en gedoe.',
            '2Dit is ons inzicht over de vraag en gedoe.',
        ]
    },
    {
        id: 46,
        title: 'Vraag 8',
        content: [
            '0Dit is ons inzicht over de vraag en gedoe.',
            '1Dit is ons inzicht over de vraag en gedoe.',
            '2Dit is ons inzicht over de vraag en gedoe.',
        ]
    },
    {
        id: 564,
        title: 'Vraag 9',
        content: [
            '0Dit is ons inzicht over de vraag en gedoe.',
            '1Dit is ons inzicht over de vraag en gedoe.',
            '2Dit is ons inzicht over de vraag en gedoe.',
        ]
    },
    {
        id: 645,
        title: 'Vraag 10',
        content: [
            '0Dit is ons inzicht over de vraag en gedoe.',
            '1Dit is ons inzicht over de vraag en gedoe.',
            '2Dit is ons inzicht over de vraag en gedoe.',
        ]
    },
]

const Results = () => {
    const {value} = useContext(ValueContext)
    const answers = value.answers

    return (
        <div>
            <div className='sm-header'>
                <h1 className='title'>Jouw data, ons inzicht</h1>
                <span className='float-right'>
                    <small>Jouw data waarde</small>
                    <span className='bg-number'>€{value.value}</span> 
                </span>
            </div>
            <div className='carousel'>
                {answers.map((answer, i) => (
                    <InsightCard content={insights[i]} key={i} answer={answer} />
                ))}
            </div>
        </div>
    )
}

export default Results  