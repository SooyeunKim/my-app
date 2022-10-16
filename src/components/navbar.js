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
import "../App.css";

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
            <NavLink to='/searchlist' activeStyle>
                Search Clinics
			</NavLink>
			<NavLink to='/searchmap' activeStyles>
				Map Search
			</NavLink>
			<NavLink to='/waitlist' activeStyle>
                Waitlist
            </NavLink>
			<NavBtnLink to='/signin'>Sign In</NavBtnLink>
			<NavBtnLink to='/signup'>Sign Up</NavBtnLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
