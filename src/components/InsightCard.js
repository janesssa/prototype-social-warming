import React, { useState } from 'react';
import '../styles/results.scss';

const InsightCard = ({content}) => {
    const [activeTab, setActiveTab] = useState()
    const [arrowClass, setArrowClass] = useState('arrow down')
    const isActive = activeTab === content.id

    const toggleAccordion = () => {
        if(isActive){
            setArrowClass('arrow down')
            setActiveTab(null)
        } else {
            setArrowClass('arrow up')
            setActiveTab(content.id)
        }
    }

    return (
        <div className='md-card'>
            {isActive && (
                <img className='card-img'></img>
            )}
            <span className='card-content'>
                <small>Categorie</small>
                <h6 className='card-title'>{content.title}</h6>
                {isActive && (
                    <p>{content.content}</p>
                )}
            </span>
            <div className='arrow-container' onClick={() => toggleAccordion()}>
                <span className={arrowClass}></span>
            </div>
        </div>
    )
}

export default InsightCard