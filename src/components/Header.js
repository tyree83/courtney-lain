import React from "react";
import Typed from "react-typed"

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Courtney Lain</h1>
        <Typed 
          className="typed-text"
          strings={["Children's Author", "Illustrator", "Amazing Woman"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="/#" className="btn-main-offer">Contact Me</a>
      </div>
    </div>
  )
}

export default Header
