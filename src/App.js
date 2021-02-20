import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Books from "./components/Books"
import Artwork from "./components/Artwork"
import AboutMe from "./components/AboutMe"
import Bookings from "./components/Bookings"


function App() {
  return (
  <>
  <Navbar />
  <Header />
  <Books />
  <Artwork />
  <AboutMe />
  <Bookings />
  </>
  );
}

export default App;
