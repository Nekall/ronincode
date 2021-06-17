import React from 'react';
import Logo from "components/Logo";
// import Sign from "components/Sign";
import Cookies from 'js-cookie';

const Navbar = () => {

  const id = Cookies.get('id')

  return(
    <nav className="navbar temp">
      <Logo />
      <ul>
        <li><a href="/articles">Articles</a></li>
        <li><a href="/signup">S'inscrire</a></li>
        <li><a href="/signin">Se connecter</a></li>
        <li><a href="/users/sign_out">Se déconnecter</a></li>
        <li><a href={`/users/${id}`}>Profil</a></li>
      </ul>
      {/* <Sign /> */}
    </nav>
  )
};

export default Navbar;