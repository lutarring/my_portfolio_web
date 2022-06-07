import React from 'react'
import '../../index.css'
import './header.css'
import ContactButton from './ContactButton'
import myProfile from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h2>Hello I'm</h2>
        <h1>XU LU</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <ContactButton/>
        <HeaderSocials/>
        <div className="myProfile">
          <img src={myProfile} alt="myProfile" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header