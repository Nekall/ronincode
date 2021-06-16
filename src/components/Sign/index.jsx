import React from 'react';
import connexion from 'assets/images/connexion.png';
import inscription from 'assets/images/inscription.png';

const Sign = () => (
  <ul className="sign_content">
    <li className="login"><a href="/signin"><img src={connexion} alt="Connexion" /></a></li>
    <li className="sign_in"><a href="/signup"><img src={inscription} alt="Inscription" /></a></li>
  </ul>
);

export default Sign;
