import React from 'react';
import '../styles/results.scss';

const InsightCard = ({content}) => {
    return (
        <div className='md-card'>
            {/* Image */}
            <img className='card-img'></img>
            <h6 className='çard-title'>{content.title}</h6>
            <p>{content.content}</p>
        </div>
    )
}

export default InsightCard