import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
//import ApiViewerPage from '../ApiViewer/ApiViewerPage';

export class NotFound extends Component {
  render() {
    return (
      <div className="HomePage">
      <h1>404 Not Found</h1>
      <h5>Sorry, there is nothing here. But since you are here now maybe you want to check out my FGR APIs?</h5>

      {/* <NavLink className="btn btn-primary" to="/vidly" component={ApiViewerPage}>Go To FGR Vidly API</NavLink> */}

      {/* <NavLink className="btn btn-primary" to="/president" component={ApiViewerPage}>Go To FGR President API</NavLink> */}

      <h6>Or maybe you want to checkout my  <a href="http://frankieriviera.com/" target="_blank" rel="noopener noreferrer" >Portfolio website</a>?</h6>

      <h6>Or maybe you want to see the <a href="https://github.com/DaRiv94" target="_blank" rel="noopener noreferrer" >Github page for this website</a>?</h6>

    </div>
    )
  }
}

export default NotFound
