import React from "react";

import "../assets/css/Welcome.css";
// import Logo from "../assets/images/logo.jpg";
import About from "./About";

const Welcome = ({ element }) => {
  return (
    <main>
      <section className="welcome">
        <div ref={element}>
          {/* <img src={Logo} alt="logo" className="welcome--logo" /> */}
          <h4 className="welcomTxt">Awesome Barbershop</h4>
          <p className="welcomTxt">Where new normal is cool..</p>
          <button className="welcome__cta-primary">BOOK NOW!</button>
        </div>
      </section>
    </main>
  );
};

export default Welcome;
