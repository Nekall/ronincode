import React from 'react';
import DropdownMenu from '../../components/DropdownMenu';
import NavItem from '../../components/NavItem';
import NavbarContainer from '../../components/NavbarContainer';
import { ReactComponent as MessengerIcon } from '../../assets/images/icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../../assets/images/icons/caret.svg';

const Navbar = () => {
  return (
    <NavbarContainer>

      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>

    </NavbarContainer>
  );
};

export default Navbar;