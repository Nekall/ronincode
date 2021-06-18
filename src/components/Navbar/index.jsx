import React from 'react';
import DropdownMenu from '../../components/DropdownMenu';
import NavItem from '../../components/NavItem';
import NavbarContainer from '../../components/NavbarContainer';
import { ReactComponent as CalendarIcon } from '../../assets/images/icons/calendar.svg';
import { ReactComponent as MessagesIcon } from '../../assets/images/icons/messages.svg';
import { ReactComponent as UserIcon } from '../../assets/images/icons/user.svg';
import { ReactComponent as CaretIcon } from '../../assets/images/icons/caret.svg';

const Navbar = () => {
  return (
    <NavbarContainer>

      <NavItem icon={<CalendarIcon />} />
      <NavItem icon={<MessagesIcon />} />
      <NavItem icon={<UserIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>

    </NavbarContainer>
  );
};

export default Navbar;