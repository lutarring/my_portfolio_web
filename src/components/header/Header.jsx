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
        <h5>IT IS MY PORTFOLIO SITE.</h5>
        <br></br>
        <h2>徐　璐 / XU LU</h2>
        <h5>95年生まれ、中国出身です</h5>
        <h5 className="text-light">システムエンジニア</h5>
        <ContactButton />
        <HeaderSocials />
        <div className="myProfile">
          <img src={myProfile} alt="myProfile" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header