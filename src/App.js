import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { intro, questions } from "./config";
import Home from "./pages/Home";
import Header from "./components/Header";
import {Question} from "./components/test";
// import Question from "./components/Question";
import Dashboard from "./components/Dashboard";
import Results from "./pages/Results";
import { ValueContext, PreValueContext } from "./context/ValueContext";

const App = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [style, setStyle] = useState({});
  const [isHome, toggleIsHome] = useState(true);
  const [isQuestion, toggleIsQuestion] = useState(false);
  const [isResults, toggleIsResults] = useState(false);
  const [isDashboard, toggleIsDashboard] = useState(false);
  const [value, setValue] = useState({ value: 0, categories: {}});
  const [preValue, setPreValue] = useState({value: 0, cartegory: ''});

  const providerValue = useMemo(() => ({value, setValue}), [value, setValue])
  const providerPreValue = useMemo(() => ({preValue, setPreValue}), [preValue, setPreValue])

  const length = questions.length;

  const handleStyle = () => {
    const width = (100 / (length + 1)) * (index + 1);
    // Not sure if the if statement in line 25 works
    setStyle({ width: width <= 100 ? width : 100 + "%" });
  };

  const handleNext = async () => {
    setIndex((i) => i + 1);

    if (index === 0 && isHome) {
      // Move from home screen to first question
      toggleIsHome(false);
      toggleIsQuestion(true);
      setIndex((i) => i - 1);
      setText(`Vraag ${index + 1} van de ${length}`);
    } else if (index === 0 && isQuestion) {
      // Move from 1st question to 2nd
      setText(`Vraag ${index + 2} van de ${length}`);
      handleStyle();
    } else if (index < length - 1) {
      // Update index untill end of questions
      setText(`Vraag ${index + 2} van de ${length}`);
      handleStyle();
    } else if (index === length - 1) {
      // Move from last question to dashboard
      toggleIsDashboard(true);
      toggleIsQuestion(false);
      toggleIsResults(false);
      setText("Resultaten");
      handleStyle();
    } else if (index === length) {
      // Move from dashboard to results
      toggleIsResults(true);
      toggleIsDashboard(false);
      toggleIsQuestion(false);
      setText("Wat betekent dit voor jou?");
      handleStyle();
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isHome && <Home content={intro} handleNext={handleNext} />}
          <ValueContext.Provider value={providerValue}>
          <PreValueContext.Provider value={providerPreValue}>
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
          </PreValueContext.Provider>
          </ValueContext.Provider>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
