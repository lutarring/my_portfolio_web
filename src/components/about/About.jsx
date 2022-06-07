import React from 'react'
import './about.css'
import Picture from '../../assets/about.jpeg'
import { FaAward } from 'react-icons/fa'
import { TbCertificate } from "react-icons/tb";
import { SiProtonvpn } from "react-icons/si";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Picture} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <TbCertificate className="about_icon"/>
              <h5>Certificate</h5>
              <small>4+</small>
            </article>
            <article className="about_card">
              <SiProtonvpn className="about_icon"/>
              <h5>Projects</h5>
              <small>4+ experienced</small>
            </article>
          </div>

          <p>
            DumyDumyDumyDumyDumyDumyDumyDumyD
            umyDumyDumyDumyDumyDumyDumyDumyDumyDumyDu
            myDumyDumy
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About