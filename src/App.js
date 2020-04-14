import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { intro, questions } from "./config";
import Home from "./pages/Home";
import Header from "./components/Header";
import Question from "./components/Question";
import Dashboard from "./components/Dashboard";

import Results from "./pages/Results";

// const [width, setWidth] = useState(10);
// const [style, setStyle] = useState();
// const [question, setquestion] = useState(0);
// const [text, setText] = useState(questions[question]);

// const handleNext = () => {
//   if (width < 101 && question < questions.length) {
//     setquestion((s) => s + 1);
//     setWidth((w) => w + 9);
//     setStyle({ width: width + "%" });
//     setText(questions[question]);
//   }
// };

const App = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [style, setStyle] = useState({});
  const [isHome, toggleIsHome] = useState(true);
  const [isQuestion, toggleIsQuestion] = useState(false);
  const [isResults, toggleIsResults] = useState(false);
  const [isDashboard, toggleIsDashboard] = useState(false);

  const length = questions.length;

    const handleNext = () => {
        
        if(index === 0 && isHome){
            // Move from home screen to first question
            console.log('home', index, length, text)
            toggleIsHome(false);
            toggleIsQuestion(true);
            setText(`Vraag ${index + 1} van de ${length}`);
        } else if (index === 0 && isQuestion) {
            // Move from 1st question to 2nd
            console.log('1st', index, length, text)
            setIndex((i) => i + 1);
            setText(`Vraag ${index + 1} van de ${length}`);
        } else if (index < length) {
            // Update index untill end of questions
            console.log('all questions', index, length, text)
            setIndex((i) => i + 1);
            setText(`Vraag ${index + 1} van de ${length}`);
        } else if (index === length){
            // Move from last question to dashboard
            console.log('dashboard', index, length, text)
            toggleIsDashboard(true);
            toggleIsQuestion(false);
            toggleIsResults(false);
            setText('Resultaten')
        } else if (index === length + 2){
            // Move from dashboard to results
            console.log('results', index, length, text)
            toggleIsResults(true);
            toggleIsDashboard(false);
            toggleIsQuestion(false);
            setText('Wat betekent dit voor jou?')
        }
        console.log('end', index, text)
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
            <Route path="/results"></Route>
            {/* Todo: This can be rebuild --- Render Components depending on the state of the Header
                <Route path="/results">
                <Header />
                Todo: Any other name suggestion is welcome
                <Dashboard />
                </Route>
                <Route path="/what-does-it-mean">
                <Header />
                <Results />
                </Route> */}
        </Switch>
        </Router>
    );
};

export default App;
