import React from 'react';
import InsightCard from '../components/InsightCard';

const insights = [
    {
        title: 'Vraag 1',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        title: 'Vraag 1',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
    {
        title: 'Vraag 1',
        content: 'Dit is ons inzicht over de vraag en gedoe.'
    },
]

const Results = () => {
    return (
        <div>
            {/* Header */}
            {/* Subtitle */}
            <h1>Jouw data, ons inzicht</h1>
            <small>Jouw data waarde</small>
            <span className='bg-number '></span>
            <div className='carousel'>

                <InsightCard />
            </div>
        </div>
    )
}

export default Results  