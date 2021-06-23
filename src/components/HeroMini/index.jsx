import React from 'react';
import img_hero from 'assets/images/tokyo.png';

const HeroMini = () => (
  <div className="hero hero-mini">
    <img src={img_hero} alt="Paysage retrowave 80's" className="hero-background"/>
    <div className="txt-container">
      <h1>BLOG</h1>
      <h2>Toutes les publications</h2>
    </div>
  </div>
);

export default HeroMini;