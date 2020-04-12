import React from 'react';
import InsightCard from '../components/InsightCard';
import '../styles/results.scss';

const insights = [
    {
        id: 736,
        title: 'Vraag 1',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        id: 841,
        title: 'Vraag 2',
        content: 'Dit is ons inzicht over de vraag en gedoe.Dit is ons inzicht over de vraag en gedoe.Dit is ons inzicht over de vraag en gedoe.Dit is ons inzicht over de vraag en gedoe.Dit is ons inzicht over de vraag en gedoe.Dit is ons inzicht over de vraag en gedoe.Dit is ons inzicht over de vraag en gedoe.Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        id: 267,
        title: 'Vraag 3',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        id: 745,
        title: 'Vraag 1',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        id: 451,
        title: 'Vraag 2',
        content: 'Dit is ons inzicht over de vraag en gedoe.Dit is ons inzicht over de vraag en gedoe.Dit is ons inzicht over de vraag en gedoe.Dit is ons inzicht over de vraag en gedoe.Dit is ons inzicht over de vraag en gedoe.Dit is ons inzicht over de vraag en gedoe.Dit is ons inzicht over de vraag en gedoe.Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        id: 348,
        title: 'Vraag 3',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        id: 663,
        title: 'Vraag 1',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        id: 46,
        title: 'Vraag 2',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        id: 564,
        title: 'Vraag 3',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
]

const Results = () => {
    return (
        <div>
            {/* Header */}
            {/* Subtitle */}
            <div className='sm-header'>
                <h1 className='title'>Jouw data, ons inzicht</h1>
                <span className='float-right'>
                    <small>Jouw data waarde</small>
                    <span className='bg-number'>€73</span> 
                </span>
            </div>
            <div className='carousel'>
                {insights.map((insight, i) => (
                    <InsightCard content={insight} key={i} />
                ))}
            </div>
        </div>
    )
}

export default Results  