import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as MessagesIcon } from '../../assets/images/icons/messages.svg';
import { ReactComponent as CaretIcon } from '../../assets/images/icons/caret.svg';
import { ReactComponent as UserIcon } from '../../assets/images/icons/user.svg';
import { ReactComponent as AgendaIcon } from '../../assets/images/icons/agenda.svg';
import { ReactComponent as LogoutIcon } from '../../assets/images/icons/logout.svg';
import { ReactComponent as BlogIcon } from '../../assets/images/icons/open-book.svg';
import { ReactComponent as WriteIcon } from '../../assets/images/icons/edit.svg';
import { ReactComponent as AddRDVIcon } from '../../assets/images/icons/add.svg';
import Logo from "components/Logo";
import './style.css'

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="NavBlock">
        <Link to="creer-un-rendez-vous"><b>Créer une session </b></Link>
        <NavItem linkTo="/creer-un-rendez-vous" icon={<AddRDVIcon />} />
      </div>
      <NavItem linkTo="/messages" icon={<MessagesIcon />} />
      <NavItem linkTo="/blog" icon={<BlogIcon />} />
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
      <Link to={props.linkTo || "#"} className="btn-blog"></Link>
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <Link to={props.linkTo || "#"} className="icon-button" onClick={() => setOpen(!open)}>
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
      <Link to={props.linkTo || "#"} className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
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
          <DropdownItem linkTo="/profile"
            leftIcon={<UserIcon />}>
            Tableau de bord
          </DropdownItem>
          <DropdownItem linkTo="/creer-un-rendez-vous"
            leftIcon={<AgendaIcon />}>
            Mes sessions
          </DropdownItem>
          <DropdownItem linkTo="/nouvel-article"
            leftIcon={<WriteIcon />}>
            Écrire un article
          </DropdownItem>
          <DropdownItem
            leftIcon={<LogoutIcon />}>
            Se déconnecter
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Navbar;