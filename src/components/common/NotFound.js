import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import VidlyAPIPage from "../API components/VidlyAPIPage";
import PresidentAPIPage from "../API components/PresidentAPI.js/PresidentAPIPage";

export class NotFound extends Component {
  render() {
    return (
      <div className="HomePage">
      <h1>404 Not Found</h1>
      <h5>Sorry, there is nothing here. But since you are here now maybe you want to check out my FGR APIs?</h5>

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


      <p>Or maybe you want to checkout my  <a href="http://frankieriviera.com/" target="_blank" rel="noopener noreferrer" >Portfolio website</a>?</p>

      <p>Or maybe you want to see the <a href="https://github.com/DaRiv94" target="_blank" rel="noopener noreferrer" >Github page for this website</a>?</p>

    </div>
    )
  }
}

export default NotFound
