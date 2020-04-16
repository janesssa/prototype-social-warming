import React from "react";
import Webcam from "react-webcam";

const Dashboard = ({handleNext}) => {
    return (
        <div className='flex-container'>
            <div className='sm-container'>
                <p className='bg-number'>€73</p>
                <h1>Dit ben jij</h1>
                <p>Maar eigenlijk ook veel meer dan alleen jij. Dit is hoe (toekomstige) verzekeringsmaatschappijen jou zien. Als data. Wat eigenlijk nog interessanter is, is wat ze hier uit afleiden.</p>
                <button className='button button--red' onClick={handleNext}>Wat betekent dit?</button>
            </div>
            <Webcam />
        </div>
    )
}

export default Dashboard