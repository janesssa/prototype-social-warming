import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { intro, questions } from "./config";
import Home from "./pages/Home";
import Header from "./components/Header";
import Question from "./components/Question";
import Dashboard from "./components/Dashboard";
import Results from "./pages/Results";

const App = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [style, setStyle] = useState({});
  const [isHome, toggleIsHome] = useState(true);
  const [isQuestion, toggleIsQuestion] = useState(false);
  const [isResults, toggleIsResults] = useState(false);
  const [isDashboard, toggleIsDashboard] = useState(false);

  const length = questions.length;

    const handleNext = async () => {
        setIndex((i) => i + 1);
        
        if(index === 0 && isHome){
            // Move from home screen to first question
            toggleIsHome(false);
            toggleIsQuestion(true);
            setIndex((i) => i - 1);
            setText(`Vraag ${index + 1} van de ${length}`);
        } else if (index === 0 && isQuestion) {
            // Move from 1st question to 2nd
            setText(`Vraag ${index + 2} van de ${length}`);
        } else if (index < length - 1) {
            // Update index untill end of questions
            setText(`Vraag ${index + 2} van de ${length}`);
        } else if (index === length -1){
            // Move from last question to dashboard
            toggleIsDashboard(true);
            toggleIsQuestion(false);
            toggleIsResults(false);
            setText('Resultaten')
        } else if (index === length){
            // Move from dashboard to results
            toggleIsResults(true);
            toggleIsDashboard(false);
            toggleIsQuestion(false);
            setText('Wat betekent dit voor jou?')
        }
    }

    return (
        <Router>
        <Switch>
            <Route exact path="/">
                {isHome && <Home content={intro} handleNext={handleNext} />}

                {!isHome && (
                    <>
                        <Header text={text} style={style} handleNext={handleNext} />

                        {isQuestion && (
                            <Question
                            content={questions[index]}
                            index={index}
                            handleNext={handleNext}
                            />
                        )}

                        {isDashboard && <Dashboard handleNext={handleNext} />}
                        {isResults && <Results />}
                    </>
                )}
            </Route>
        </Switch>
        </Router>
    );
};

export default App;
