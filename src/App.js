import React, { Component } from 'react';
import HomePage from './components/Home/HomePage';
import NotFound from './components/common/NotFound';
import Header from './components/common/Header';
import {Route, Switch} from 'react-router-dom';
import VidlyAPIPage from './components/API components/VidlyAPIPage';
import PresidentAPIPage from './components/API components/PresidentAPI.js/PresidentAPIPage';
import USColonyPage from './components/API components/USColonyAPI/USColonyPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/vidly" exact component={VidlyAPIPage} />
          <Route path="/president" exact component={PresidentAPIPage} />
          <Route path="/uscolony" exact component={USColonyPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
