import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function Car(props) {
    return   (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={ props.signin }>
          positronX
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={ props.signin }>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={ props.signup }>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }

  export default Car;