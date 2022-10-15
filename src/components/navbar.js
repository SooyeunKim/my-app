import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import logo from '../logo.png';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
			<img src={logo} alt="Logo" width="100px"/>
            <NavLink to='/' activeStyle>
                Start
            </NavLink>
            <NavLink to='/main' activeStyle>
                Look for Clinics
            </NavLink>
			<NavLink to='/waitlist' activeStyle>
                waitlist
            </NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
		<NavBtn>
		<NavBtnLink to='/signup'>Sign Up</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
