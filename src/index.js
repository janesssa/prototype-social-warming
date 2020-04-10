import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/results.scss';
import  {intro} from "./config";
import Home from './pages/Home';
import Header from './components/Header'

import * as serviceWorker from './serviceWorker';
import Results from './pages/Results';

ReactDOM.render(
  <React.StrictMode>
    {/* <Home content={intro} /> */}
    <Header />
    <Results />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
