import React from 'react'
import './foot.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">徐　璐</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* <div className="footer_socials">
        <a href="#" >234</a>
        <a href="#" >234</a>
         <a href="#" >234</a>
      </div> */}

      <div className="footer_copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer