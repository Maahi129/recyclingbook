import React,{useState} from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './navelements';
import image from '../images/favi-removebg-preview.png';
import Home from '../home';
const Navbar = () => {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <>
      <Nav id="head">
          <img src={image} id="logo" width={75} height={75} alt=""/>
          <h1 class="recycle-logo"> RECYCLE </h1>
         <Home />
        <div className="menu-icon" onClick={handleShowNavbar}>
        <Bars />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <NavMenu id="navbar">
          <NavLink to='/' activeStyle  id="routes">
            Home
          </NavLink>
          <NavLink to='/price' activeStyle  id="routes">
            Price
          </NavLink>
          <NavLink to='/recycled' activeStyle id="routes">
            Recycled
          </NavLink>
          <NavLink to='/charity' activeStyle id="routes">
            Charity
          </NavLink>
          <NavLink to='/contact' activeStyle id="routes">
            Enquiry
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
