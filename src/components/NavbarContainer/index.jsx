import React from 'react';
import Logo from "components/Logo";
import BtnPublications from "components/BtnPublications";

const NavbarContainer = (props) => {
  return (
    <nav className="navbar">
      <Logo />
      <BtnPublications />
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

export default NavbarContainer;