import React from 'react';
import img_logo from 'assets/images/ronincode-logo-hero.png'
import { Link } from 'react-router-dom';


const Footer = () => {

return (
  <footer>
    <div className="footer-content">
      <div className="footer-background cell-1"></div>
      <div className="footer-background cell-2"></div>
      <div className="footer-background cell-3"></div>
      <div className="txt-grid-container">
        <div className="footer-bloc brand-container">
          <Link to="/articles">
            <img className="logo" src={img_logo} alt="Ronin Code"></img>
          </Link>
          <div className="mention">© 2021 Tous droits réservés</div>
        </div>
        <div className="footer-bloc bloc-1">
          <h5> Profil</h5>
          <Link to="/profile">
            <h6> Dashboard</h6>
          </Link>
          <Link to="/">
            <h6> Sessions</h6>
          </Link>
          <Link to="/conversations">
            <h6> Messages</h6>
          </Link>
        </div>
        <div className="footer-bloc bloc-2">
          <h5> Collaborer</h5>
          <Link to="/">
            <h6> Chercher un Mentor</h6>
          </Link>
          <Link to="/">
            <h6> Devenir Mentor</h6>
          </Link>
        </div>
        <div className="footer-bloc bloc-3">
          <h5> Entreprise</h5>
          <Link to="/blog">
            <h6> Ressources</h6>
          </Link>
          <Link to="/">
            <h6> Mentions légales</h6>
          </Link>
          <Link to="/team">
            <h6> Team</h6>
          </Link>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer;