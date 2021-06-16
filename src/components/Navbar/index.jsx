import React from 'react';
import Logo from "components/Logo";
// import Sign from "components/Sign";

const Navbar = () => (

    <nav className="navbar temp">
      <Logo />
      <ul>
        <li><a href="/articles">Articles</a></li>
        <li><a href="/signup">S'inscrire</a></li>
        <li><a href="/signin">Se connecter</a></li>
        <li><a href="/users/sign_out">Se déconnecter</a></li>
        <li><a href="/users/1">Profil</a></li>
      </ul>
      {/* <Sign /> */}
    </nav>
);

export default Navbar;