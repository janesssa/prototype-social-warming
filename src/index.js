import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/index.scss';
import './styles/results.scss';
import  {intro, questions} from "./config";
import Home from './pages/Home';
import Header from './components/Header'

import * as serviceWorker from './serviceWorker';
import Results from './pages/Results';
import Question from './pages/Question';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/'>
        <Home content={intro} />
      </Route>
      <Route path='/results'>
        <Header />
        <Results />
      </Route>
      <Route path='/question'>
        <Question content={questions[0]}/>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
