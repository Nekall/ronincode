import React from 'react';
import Logo from "components/Logo";
import news from 'assets/images/icons/news-regular.svg';
import calendar from 'assets/images/icons/calendar-alt-regular.svg';
import message from 'assets/images/icons/comment-regular.svg';
import profile from 'assets/images/icons/user-regular.svg';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from "react-redux";

const Navbar = () => {
  const logged = useSelector(state => state.logReducer.logged);

  const logOff = () => {
    Cookies.remove('token');
    Cookies.remove('id');
    window.location.href = "/se-connecter";
  };

  return (
    <nav className="navbar">
      <Logo />
      <div className="publications">
        <Link to="/blog">
          <img src={news} alt="blog" className="icon" />
          <h2>Blog</h2>
        </Link>
      </div>
      <ul >
        {logged ?
          <>
            <li>
              <Link to="/nouvel-article">Créer un Article</Link>
            </li>
            <li>
              <Link to="/creer-un-rendez-vous">Créer un RDV</Link>
            </li>
            <li>
              <Link to="/">
                <img src={calendar} alt="Agenda" className="icon"/>
              </Link>
            </li>
            <li>
              <Link to="/conversations/messages">
                <img src={message} alt="Messages" className="icon"/>
              </Link>
            </li>
            <li>
              <Link to="/conversations">
                <img src={message} alt="Messages" className="icon"/>
              </Link>
            </li>
            <li>
              <Link to={`/profile`}>
                <img src={profile} alt="Mon profil" className="icon"/>
              </Link>
            </li>
            <li>
              <Link to="" onClick={logOff}>Se déconnecter</Link>
            </li>
          </>
          :
          <>
            <li><Link to="/inscription">S'inscrire</Link></li>
            <li><Link to="/se-connecter">Se connecter</Link></li>
          </>
        }
      </ul>
    </nav>
  );
};

export default Navbar;
