import React from 'react';

const InsightCard = ({content}) => {
    return (
        <div className='md-card'>
            {/* Image */}
            <h6>{content.title}</h6>
            <p>{content.content}</p>
        </div>
    )
}

export default InsightCard