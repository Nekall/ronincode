import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as MessagesIcon } from '../../assets/images/icons/messages.svg';
import { ReactComponent as CaretIcon } from '../../assets/images/icons/caret.svg';
import { ReactComponent as UserIcon } from '../../assets/images/icons/user.svg';
import { ReactComponent as AgendaIcon } from '../../assets/images/icons/agenda.svg';
import Logo from "components/Logo";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavItem icon={<AgendaIcon />} />
      <NavItem icon={<MessagesIcon />} />
      <NavItem icon={<UserIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </NavbarContainer>
  );
}

function NavbarContainer(props) {
  return (
    <nav className="navbar">
      <Logo />
      <Link to="#" className="btn-blog">BLOG</Link>
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <Link to="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </Link>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <Link to="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </Link>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem
            leftIcon="🦧">
            Tableau de bord
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧">
            Prendre RDV
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧">
            Créer un article
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧">
            Se déconnecter
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Navbar;
