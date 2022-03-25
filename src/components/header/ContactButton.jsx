import React from 'react'
import CV from '../../assets/CV.pdf'

const ContactButton = () => {
  return (
    <div className="contact-button">
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contactme" className="btn btn-primary">Contact Me!</a>
      </div>
  )
}

export default ContactButton