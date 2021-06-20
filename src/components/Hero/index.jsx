import React from 'react';
import img_hero from 'assets/images/background-retrowave-web.jpg';
import img_hackerman from 'assets/images/hackerman.png';
import img_logo from 'assets/images/ronincode-logo.png';

const Hero = () => (
  <div className="hero">
    <img src={img_hero} alt="Paysage retrowave 80's" className="hero-background"/>
    <img src={img_hackerman} alt="Paysage retrowave 80's" className="hero-2"/>
    <img src={img_logo} alt="Paysage retrowave 80's" className="hero-3"/>
    <h2 className="hero-txt">"Ne Code<br/>plus seul !"</h2>
  </div>
);

export default Hero;