import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {intro} from "./config";
import Home from './pages/Home';
import Header from './components/Header'
import Dashboard from './components/Dashboard';

import Results from './pages/Results';

const App = () => {
    return (
        <Router>
    <Switch>
      <Route exact path='/'>
        <Home content={intro} />  
      </Route>
      {/* Todo: This can be rebuild --- Render Components depending on the state of the Header */}
      <Route path='/results'>
        <Header />
        {/* Todo: Any other name suggestion is welcome */}
        <Dashboard />
      </Route>
      <Route path='/what-does-it-mean'>
        <Header />
        <Results />
      </Route>
    </Switch>
  </Router>
    )
}

export default App