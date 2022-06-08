import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

const HeaderSocials = () => {
  return (
    <div className="header-socials">
        <a href="https://github.com/lutarring" target="_blank" rel="noreferrer"><BsGithub /></a>    
        <a href="#contact"><HiOutlineMail /></a>    
    </div>
  )
}

export default HeaderSocials