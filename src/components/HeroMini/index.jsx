import React from 'react';
import img_hero from 'assets/images/tokyo.png';
import img_hackerman from 'assets/images/hackerman.png';
import img_logo from 'assets/images/ronincode-logo-20210617-4.png';

const HeroMini = () => (
  <div className="heroMini">
    <img src={img_hero} alt="Paysage retrowave 80's" className="hero-background"/>
    {/* <img src={img_hackerman} alt="Paysage retrowave 80's" className="hero-2"/>
    <img src={img_logo} alt="Paysage retrowave 80's" className="hero-3"/> */}
    <div className="hero-txt-container">
      <div className="hero-txt">
        <h2>Blog</h2>
        <h3>Tous les articles de la communauté</h3>
      </div>
    </div>
  </div>
);

export default HeroMini;