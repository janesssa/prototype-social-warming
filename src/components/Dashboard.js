import React, { useContext } from "react";
import Webcam from "react-webcam";
import { ValueContext } from "../context/ValueContext";

const Dashboard = ({handleNext}) => {
    const {value} = useContext(ValueContext)
    return (
        <div className='flex-container'>
            <div className='sm-container'>
                <p className='bg-number'>€{value}</p>
                <h1>Dit ben jij</h1>
                <p>Maar eigenlijk ook veel meer dan alleen jij. Dit is hoe (toekomstige) verzekeringsmaatschappijen jou zien. Als data. Wat eigenlijk nog interessanter is, is wat ze hier uit afleiden.</p>
                <div className='button button-margin'> <a>Wat betekent dit? </a></div>
            </div> 

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