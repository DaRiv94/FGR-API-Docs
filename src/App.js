import React, { Component } from 'react';
import HomePage from './components/Home/HomePage';
import NotFound from './components/common/NotFound';
import Header from './components/common/Header';
import {Route, Switch} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/vidly" exact component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
