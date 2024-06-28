import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/kb_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>HOME</Link> 
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>WHO ARE WE</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>MEET THE TEAM</Link>
        <Link activeClass="active" to="plans-container" spy={true} smooth={true} offset={-30} duration={500} className='desktopMenuListItem'>MEMBERS</Link>
        <Link activeClass="active" to="contact-container" spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>CONTACT</Link>
      </div>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`mobileMenu ${isOpen ? 'active' : ''}`}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className='mobileMenuListItem' onClick={toggleMenu}>HOME</Link> 
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className='mobileMenuListItem' onClick={toggleMenu}>WHO ARE WE</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-60} duration={500} className='mobileMenuListItem' onClick={toggleMenu}>MEET THE TEAM</Link>
        <Link activeClass="active" to="plans-container" spy={true} smooth={true} offset={-30} duration={500} className='mobileMenuListItem' onClick={toggleMenu}>MEMBERS</Link>
        <Link activeClass="active" to="contact-container" spy={true} smooth={true} offset={-100} duration={500} className='mobileMenuListItem' onClick={toggleMenu}>CONTACT</Link>
      </div>
    </nav>
  );
}

export default Navbar;
