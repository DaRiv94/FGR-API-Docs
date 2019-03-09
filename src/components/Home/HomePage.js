import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import VidlyAPIPage from '../API components/VidlyAPIPage';
//import NotFound from '../common/NotFound';
import PresidentAPIPage from '../API components/PresidentAPI.js/PresidentAPIPage';

import './HomePage.css';

export class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h1>Welcome to FGR API Docs!</h1>
        <h5>FGR API Docs is a web user interface built to demonstrate and display how FGR APIs work. </h5>

        <NavLink className="btn btn-primary" to="/vidly" component={VidlyAPIPage}>Go To Vidly API</NavLink>

        <NavLink className="btn btn-primary" to="/president" component={PresidentAPIPage}>Go To President API</NavLink>

        <h6>To Learn more about FGR Applications visit my Portfolio website  <a href="http://frankieriviera.com/" target="_blank" rel="noopener noreferrer" >Here</a></h6>

        <h6>To see the code on github for FGR API Docs go <a href="https://github.com/DaRiv94/FGR-API-Docs" target="_blank" rel="noopener noreferrer" >Here</a></h6>

      </div>
    )
  }
}

export default HomePage
