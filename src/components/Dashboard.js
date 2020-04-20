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

const Dashboard = ({handleNext}) => {
    const {value} = useContext(ValueContext)
    var personalWord = Object.keys(value.categories).map(el => { 
            console.log(el)
            return returnWordArray(el, value.categories[el])
        })

    return (

        <div className='flex-container'>
            <div className='sm-container'>
                <p className='bg-number'>€{value.value}</p>
                <h1>Dit ben jij</h1>
   
                <p>Maar eigenlijk ook veel meer dan alleen jij. Dit is hoe (toekomstige) verzekeringsmaatschappijen jou zien. Als data. Wat eigenlijk nog interessanter is, is wat ze hier uit afleiden.</p>
                <div className='button button-margin'> <a>Wat betekent dit? </a></div>
            </div> 

            <div className="camResults">
                <p>{personalWord[0]}</p>
                <span className="line"> </span>    
            </div> 

            <div className="camResults camRes2">
                <p>{personalWord[1]}</p>
                <span className="line"> </span>    
            </div> 

            <div className="camResults camRes3">
                <p>{personalWord[2]}</p>
                <span className="line"> </span>    
            </div> 

            <div className="camResults camRes4">
                <p>{personalWord[3]}</p>
                <span className="line"> </span>    
            </div> 
            <Webcam />
        </div>
    )
}

export default Dashboard
