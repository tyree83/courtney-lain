import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './App';
import Books from './components/Books';
import Artwork from './components/Artwork';
import AboutMe from './components/AboutMe';
import Bookings from './components/Bookings';

export default ()=>{
    return(
        <Router>
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
    </Router>
    )
}