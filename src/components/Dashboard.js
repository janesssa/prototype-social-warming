import React from "react";
import Webcam from "react-webcam";
// TODO: Import values from Context

// TODO: Create new function which returns a single word from an array of words depending on the height of the value passed in
// HINT: Pass the function a category and value 
    // In function     
    // TODO: Create 4 arrays with multiple words (1 array per category)
    // TODO: Create a switch to see what category is passed in
    // TODO: Return different word per category depended on the value

const Dashboard = ({handleNext}) => {
    // TODO: Create an array with 4 words 
    return (
        <div className='flex-container'>
            <div className='sm-container'>
                <p className='bg-number'>€73</p>
                <h1>Dit ben jij</h1>
                <p>Maar eigenlijk ook veel meer dan alleen jij. Dit is hoe (toekomstige) verzekeringsmaatschappijen jou zien. Als data. Wat eigenlijk nog interessanter is, is wat ze hier uit afleiden.</p>
                <div className='button button-margin'> <a>Wat betekent dit? </a></div>
            </div> 
            {/* TODO: Loop through array and return div with dynamic word */}
            <div className="camResults">
                <p>Diabetes!!!></p>
                <span className="line"> </span>    
            </div> 

            <div className="camResults camRes2">
                <p>Forever Alone</p>
                <span className="line"> </span>    
            </div> 

            <div className="camResults camRes3">
                <p>statement 3</p>
                <span className="line"> </span>    
            </div> 

            <div className="camResults camRes4">
                <p>Erg Gay</p>
                <span className="line"> </span>    
            </div> 
            <Webcam />
        </div>
    )
}

export default Dashboard