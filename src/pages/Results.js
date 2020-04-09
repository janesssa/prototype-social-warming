import React from 'react';
import InsightCard from '../components/InsightCard';

import '../styles/results.scss'

const insights = [
    {
        title: 'Vraag 1',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        title: 'Vraag 2',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        title: 'Vraag 3',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        title: 'Vraag 1',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        title: 'Vraag 2',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        title: 'Vraag 3',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        title: 'Vraag 1',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        title: 'Vraag 2',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        title: 'Vraag 3',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
]

const Results = () => {
    return (
        <div>
            {/* Header */}
            {/* Subtitle */}
            <div className='filler'></div>
            <h1 className='title'>Jouw data, ons inzicht</h1>
            <span className='bg-number float-right'>€73</span>
            <small className='float-right'>Jouw data waarde</small>
            <div className='carousel'>
                {insights.map((insight, i) => (
                    <InsightCard content={insight} key={i} />
                ))}
            </div>
        </div>
    )
}

export default Results  