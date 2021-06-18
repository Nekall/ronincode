import React from 'react';

const NavbarContainer = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

export default NavbarContainer;