import React, { useContext } from "react";
import Webcam from "react-webcam";
import { ValueContext } from "../context/ValueContext";

function returnWordArray(category, value){
   
    let arraySport = ["Atletisch", "Vrij lui"]; 
    let arraySlapen = ["Weinig energie", "Energiek"];
    let arrayEten = ["Vreetzak", "Culinair", "Fitgirl"];
    let arrayOverig = ["Raakt snel verslaafd", "Levensgenieter"];  

    switch(category){
        case "Sport": 
            if(value < value/2 ){
               return arraySport[0];
            }else{
                return arraySport[1];
            }
        case "Slaap":
            if(value < value/2 ){
                return arraySlapen[0];
            }else{
                return arraySlapen[1];
            }
        case "Eten":
            if(value < value*(0.33 * 100) ){
                return arrayEten[0];
            }
            if(value < value*(0.66 * 100) ){
               return arrayEten[1];
            }else{
               return arrayEten[2];
            }
        case "Overige":
            if(value < value/2 ){
               return arrayOverig[0]
            }else{
               return arrayOverig[1]
            } 
        default: 
            console.log("something is wrong");
    }
}

export const PersonalWord = ({word, index}) => {
    const className = `camResults${index === 0 ? '' : ' camRes' + (index + 1)}`
    return (
        <div className={className}>
            <p>{word}</p>
            <span className="line"> </span>    
        </div> 
    )
}

const Dashboard = ({handleNext}) => {
    const {value} = useContext(ValueContext)
    var personalWord = Object.keys(value.categories).map(el => { 
            return returnWordArray(el, value.categories[el])
        })

    return (
        <div className='flex-container'>
            <div className='sm-container'>
                <p className='bg-number'>€{value.value.toFixed(2)}</p>
                <h1>Dit ben jij</h1>
                <p>Maar eigenlijk ook veel meer dan alleen jij. Dit is hoe (toekomstige) verzekeringsmaatschappijen jou zien. Als data. Wat eigenlijk nog interessanter is, is wat ze hier uit afleiden.</p>
                <div className='button button-margin' onClick={() => handleNext()}>Wat betekent dit?</div>
            </div> 
            {personalWord.map((word, i) => (
                <PersonalWord word={word} index={i} key={i} /> 
            ))}
            <Webcam />
        </div>
    )
}

export default Dashboard
