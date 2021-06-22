import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as MessagesIcon } from '../../assets/images/icons/messages.svg';
import { ReactComponent as CaretIcon } from '../../assets/images/icons/caret.svg';
import { ReactComponent as UserIcon } from '../../assets/images/icons/user.svg';
import { ReactComponent as LogoutIcon } from '../../assets/images/icons/logout.svg';
import { ReactComponent as BlogIcon } from '../../assets/images/icons/open-book.svg';
import { ReactComponent as WriteIcon } from '../../assets/images/icons/edit.svg';
import { ReactComponent as AddRDVIcon } from '../../assets/images/icons/add.svg';
import useFetch from '../../Hooks/useFetch';
import Logo from 'components/Logo';
import Cookies from 'js-cookie';

const Navbar = () => {
  const logged = useSelector(state => state.logReducer.logged);
  const is_admin = useSelector(state => state.logReducer.is_admin);

  return (
    <NavbarContainer>
      {logged ?
        <>
        {is_admin?
          <Link className="btn-blog" to="/admin">Panel Admin</Link>
          :<></>}
        <NavItem linkTo="/conversations" icon={<MessagesIcon />} />
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
        </>
      :
      <>
      <Link className="btn-blog" to="/inscription">S'inscrire</Link>
      <Link className="btn-blog" to="/se-connecter">Se Connecter</Link>
      </>
      }
    </NavbarContainer>
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

  const { doFetch: discoFetch } = useFetch("DELETE");
    let id = Cookies.get('id');
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
          <DropdownItem linkTo={`/profile/${id}`}
            leftIcon={<UserIcon />}>
            Tableau de bord
          </DropdownItem>
          <DropdownItem linkTo="/creer-un-rendez-vous"
            leftIcon={<AddRDVIcon />}>
            Créer un rendez-vous
          </DropdownItem>
          <DropdownItem linkTo="/nouvel-article"
            leftIcon={<WriteIcon />}>
            Écrire un article
          </DropdownItem>
          <Link to="" onClick={()=>disconnect()}>Se deconnecter</Link>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Navbar;
