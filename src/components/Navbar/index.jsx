import React from 'react';
import Logo from "components/Logo";
// import Sign from "components/Sign";
import news from 'assets/images/icons/news-regular.svg';
import calendar from 'assets/images/icons/calendar-alt-regular.svg';
import message from 'assets/images/icons/comment-regular.svg';
import profile from 'assets/images/icons/user-regular.svg';

import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from "react-redux";

const Navbar = () => {

  const { logged } = useSelector(state => state);

  const handleClick = (e) => {
    e.preventDefault();
    Cookies.remove('token');
    Cookies.remove('id');
    window.location.href = '/signin';
    return false;
  };

  return (
    <nav className="navbar">
      <Logo />
      <div className="publications">
        <Link to="/articles">
          <img src={news} alt="Publications" className="icon" />
          <h2>Publications</h2>
        </Link>
      </div>

      <ul >
        {logged ?
          <>
            <li><a href="/new_article">Créer un Article</a></li>
            <li>
              <Link to="/signup">
                <img src={calendar} alt="Agenda" className="icon"/>
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={message} alt="Messages" className="icon"/>
              </Link>
            </li>
            <li>
              <Link to="/users/2">
                <img src={profile} alt="Mon profil" className="icon"/>
              </Link>
            </li>
            <li><Link to="#" >Mentors</Link></li>
            <li><Link to="#" >Disciples</Link></li>
            <li><Link to="#" onClick={handleClick}>Se déconnecter</Link></li>
          </>
          :
          <>
            <li><Link to="/signup">S'inscrire</Link></li>
            <li><Link to="/signin">Se connecter</Link></li>
          </>
        }
      </ul>
    </nav>
  );
};

export default Navbar;
