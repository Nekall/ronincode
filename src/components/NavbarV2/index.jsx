import React from 'react';
import DropdownMenu from '../DropdownMenu';
import NavItem from '../NavItem';
import NavbarContainer from '../NavbarContainer';
import { ReactComponent as CalendarIcon } from '../../assets/images/icons/calendar.svg';
import { ReactComponent as MessagesIcon } from '../../assets/images/icons/messages.svg';
import { ReactComponent as UserIcon } from '../../assets/images/icons/user.svg';
import { ReactComponent as CaretIcon } from '../../assets/images/icons/caret.svg';

const NavbarV2 = () => {
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

export default NavbarV2;