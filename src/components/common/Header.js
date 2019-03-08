import React from 'react'
import {NavLink} from 'react-router-dom';
import HomePage from '../Home/HomePage';
import './Header.css'

export default function Header() {
  return (
    <div className="divHeader">
      <NavLink className="header" to="/" component={HomePage}>Home</NavLink>

    </div>
  )
}
