import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

const HeaderSocials = () => {
  return (
    <div className="header-socials">
        <a href="www.github.com" target="_blank"><BsGithub /></a>    
        <a href="www.google.com" target="_blank"><HiOutlineMail /></a>    
    </div>
  )
}

export default HeaderSocials