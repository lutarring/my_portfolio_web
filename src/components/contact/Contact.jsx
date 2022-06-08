import './contact.css'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { TbLanguageHiragana } from 'react-icons/tb'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j2zzvrg', 'template_oxl0xzr', form.current, 'YWtmkRuPWE87Aw4sa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container"> 
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className="contact_option_icon"/>
            <h4>Email</h4>
            <h5>lutarring@gmail.com</h5>
            <a href="mailto:lutarring@gmail.com">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <MdLocationOn className="contact_option_icon"/>
            <h4>Location</h4>
            <h5>日本東京江戸川区</h5>
          </article>
          <article className="contact_option">
            <TbLanguageHiragana className="contact_option_icon"/>
            <h4>Languages</h4>
            <h5>中国語、日本語、英語</h5>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact