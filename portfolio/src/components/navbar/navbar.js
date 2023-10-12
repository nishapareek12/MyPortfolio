import React, { useState } from 'react';
import './navbar.css';
import nplogo from '../../assets/nplogo.png';
import {Link} from 'react-scroll';
import ContactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="navbar">
      <img src={nplogo} alt="Logo"  className='logo'/>
      <div className="desktopMenu">
          <Link activeclass='active' to='intro' spy={true} smooth={true}
          offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
          <Link activeclass='active' to='skills' spy={true} smooth={true}
          offset={-100} duration={500} className="desktopMenuListItem">About</Link>
          <Link activeclass='active' to='works' spy={true} smooth={true}
          offset={-70} duration={500} className="desktopMenuListItem">Portfolio</Link>
          <Link activeclass='active' to='contact' spy={true} smooth={true}
          offset={-70} duration={500} className="desktopMenuListItem">Contact Me</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => document.getElementById('contact').scrollIntoView({behavior :'smooth'})}>
        <img src={ContactImg} alt="" className='desktopMenuImg' />
        Contact Me
      </button>
      <img src={menu} alt="menu"  className='mobMenu' onClick={() =>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{ display: showMenu? 'flex':'none'}}>
          <Link activeclass='active' to='intro' spy={true} smooth={true}
          offset={-100} duration={500} className="ListItem" onClick={() =>setShowMenu(false)}>Home</Link>
          <Link activeclass='active' to='skills' spy={true} smooth={true}
          offset={-100} duration={500} className="ListItem" onClick={() =>setShowMenu(false)}>About</Link>
          <Link activeclass='active' to='works' spy={true} smooth={true}
          offset={-70} duration={500} className="ListItem" onClick={() =>setShowMenu(false)}>Portfolio</Link>
          <Link activeclass='active' to='contact' spy={true} smooth={true}
          offset={-70} duration={500} className="ListItem" onClick={() =>setShowMenu(false)}>Contact Me</Link>
      </div>


    </nav>
  )
}

export default Navbar