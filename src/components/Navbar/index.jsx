import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as MessagesIcon } from '../../assets/images/icons/messages.svg';
import { ReactComponent as CaretIcon } from '../../assets/images/icons/caret.svg';
import { ReactComponent as UserIcon } from '../../assets/images/icons/user.svg';
import { ReactComponent as AdminIcon } from '../../assets/images/icons/admin.svg';
import { ReactComponent as LogoutIcon } from '../../assets/images/icons/logout.svg';
import { ReactComponent as WriteIcon } from '../../assets/images/icons/edit.svg';
import { ReactComponent as AgendaIcon } from '../../assets/images/icons/agenda.svg';
import useFetch from '../../Hooks/useFetch';
import Logo from 'components/Logo';
import Cookies from 'js-cookie';

const Navbar = () => {
  let id = Cookies.get('id');
  const logged = useSelector(state => state.logReducer.logged);

  return (
    <>
      <NavbarContainer>
        {logged ?
          <>
          <NavItem linkTo="/creer-un-rendez-vous" icon={<AgendaIcon />} />
          <NavItem linkTo="/conversations" icon={<MessagesIcon />} />
          <NavItem linkTo={`/profile/${id}`} icon={<UserIcon />} />
          <NavItem icon={<CaretIcon />}>
            <DropdownMenu></DropdownMenu>
          </NavItem>
          </>
        :
        <>
        <Link className="btn-connexion btn-signin" to="/se-connecter">Connexion</Link>
        <Link className="btn-connexion btn-signup" to="/inscription">Inscription</Link>
        </>
        }
      </NavbarContainer>
      <span className="fix-sticky-navbar" />
    </>
  );
}

function NavbarContainer(props) {
  return (
    <nav className="navbar">
      <Logo />
      <Link to={props.linkTo || "/blog"} className="btn-blog">BLOG</Link>
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

  const is_admin = useSelector(state => state.logReducer.is_admin);
  const { doFetch: discoFetch } = useFetch("DELETE");

  function disconnect(){
    discoFetch('users/sign_out')
    Cookies.remove('token');
    Cookies.remove('id');
    window.location.href = '/';
    return false;
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
          <DropdownItem linkTo={'/profile-edit'}
            leftIcon={<UserIcon />}>
            Edit profile
          </DropdownItem>
          <DropdownItem linkTo="/nouvel-article"
            leftIcon={<WriteIcon />}>
            Écrire un article
          </DropdownItem>
          {is_admin?
            <DropdownItem linkTo="/admin" className="admin-style"
            leftIcon={<AdminIcon />}>
              Administration
            </DropdownItem>
          :<></>}
          <DropdownItem
            leftIcon={<LogoutIcon />}> <Link to="" onClick={()=>disconnect()}>Se déconnecter</Link>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Navbar;
