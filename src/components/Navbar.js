import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from '../App';
import Books from './Books';
import Artwork from './Artwork';
import AboutMe from './AboutMe';
import Bookings from './Bookings';

import logo from "../images/logo2.png";
//REACT FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">

        <a className="navbar-brand" href="/#"><img className="logo" src={logo} alt="logo.."></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/#"><Link to="">Home</Link> 
              <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#"><Link to="">Books</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#"><Link to="">Artwork</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#"><Link to="">About Me</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#"><Link to="">Bookings & Events</Link></a>
            </li>
          </ul> 

            <Route exact path="/" component={App} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/artwork" component={Artwork} />
            <Route exact path="/aboutMe" component={AboutMe} />
            <Route exact path="bookings" component={Bookings} />

        </div>
      </div>
    </nav>
    </Router>
  )
}

export default Navbar
