import React from 'react';
import { Link } from 'react-router-dom';
import img_logo from 'assets/images/ronincode-logo-hero.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-background cell-1"></div>
        <div className="footer-background cell-2"></div>
        <div className="cell-3"></div>
        <div className="txt-grid-container">
          <div className="footer-bloc brand-container">
            <Link to="/articles">
              <img className="logo" src={img_logo} alt="Ronin Code"></img>
            </Link>
            <div className="mention">© 2021 Tous droits réservés</div>
          </div>
          <div className="footer-bloc bloc-1">
            <h5> Ronin Code</h5>
            <Link to="/trouver-un-mentor">
              <h6>Chercher un Mentor</h6>
            </Link>
            <Link to="/qui-sommes-nous">
              <h6>Qui sommes-nous ?</h6>
            </Link>
            <Link to="/team">
              <h6>Team</h6>
            </Link>
          </div>
          <div className="footer-bloc bloc-2">
            <h5>Media</h5>
            <Link to="/blog">
              <h6>Blog</h6>
            </Link>
            <a href="https://www.youtube.com/watch?v=N8belcUA4hk?autoplay=1" rel="noreferrer" target="_blank">
              <h5 style={{color: "white"}}>リックロール</h5>
            </a>
          </div>
          <div className="footer-bloc bloc-3">
            <h5> Support</h5>
            <Link to="/mentions-legales">
              <h6>Mentions légales</h6>
            </Link>
            <Link to="/contact">
              <h6>Contact</h6>
            </Link>
            <Link to="/politique-de-confidentialite">
              <h6>Politique de confidentialité</h6>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
