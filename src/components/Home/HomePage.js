import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import VidlyAPIPage from "../API components/VidlyAPIPage";
import PresidentAPIPage from "../API components/PresidentAPI.js/PresidentAPIPage";
import USColonyPage from '../API components/USColonyAPI/USColonyPage';

import "./HomePage.css";

export class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h1>Welcome to FGR API Docs!</h1>
        <h5>
          FGR API Docs is a web user interface built to document, demonstrate and display
          how FGR APIs work.{" "}
        </h5>

        <div>
          <NavLink
            className="btn btn-primary"
            to="/vidly"
            component={VidlyAPIPage}
          >
            Go To FGR Vidly API
          </NavLink>
          <p>FGR Vidly API is an example movie rental service api.</p>
        </div>

        <div>
          <NavLink
            className="btn btn-primary"
            to="/president"
            component={PresidentAPIPage}
          >
            Go To President API
          </NavLink>
          <p>
            FGR President API is an example api that uses Microsoft Azure Table
            Storage
          </p>
        </div>

        <div>
          <NavLink
            className="btn btn-primary"
            to="/uscolony"
            component={USColonyPage}
          >
            Go To US Colony API
          </NavLink>
          <p>
            FGR US Colony API is an example serverless api that uses a Microsoft Azure Function in the Azure cloud
          </p>
        </div>

        <p>
          To Learn more about FGR Applications visit my Portfolio website{" "}
          <a
            href="http://frankieriviera.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here
          </a>
        </p>

        <p>
          To see the code on github for FGR API Docs go{" "}
          <a
            href="https://github.com/DaRiv94/FGR-API-Docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here
          </a>
        </p>
      </div>
    );
  }
}

export default HomePage;
