import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Header() {
  return (
    <div>
      <header className='header'>
        <a href="#" className='logo'>Portfolio</a>
        <nav className="navbar">
            <a href="#home" className='active'>Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
           
        </nav>
        <FontAwesomeIcon icon={faBars} id='menu'/>

      </header>
    </div>
  )
}

export default Header
