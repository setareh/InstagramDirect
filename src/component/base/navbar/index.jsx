import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import ICONS from '../../../assets/images/icons';

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} className="navbar-light bg-white navbar-expand border-top justify-content-around p-0" fixed="bottom" >
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav nav-fill navbar-collapse" navbar>
            <NavItem>
                <Link className='nav-link' to="/">
                    <img src={ICONS.home} alt='home' width={'40px'}/>
                </Link>
            </NavItem>
            <NavItem>
                <Link className='nav-link' to="/">
                    <img src={ICONS.search} alt='home' width={'40px'}/>
                </Link>
            </NavItem>
            <NavItem>
                <Link className='nav-link' to="/">
                    <img src={ICONS.plusSquare} alt='home' width={'40px'}/>
                </Link>
            </NavItem>
            <NavItem>
                <Link className='nav-link' to="/">
                    <img src={ICONS.like} alt='home' width={'40px'}/>
                </Link>
            </NavItem>
            <NavItem>
                <Link className='nav-link' to="/">
                    <img src={ICONS.user} alt='home' width={'40px'}/>
                </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;