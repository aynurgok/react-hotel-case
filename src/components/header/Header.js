import React from 'react'
import './style.css'
import {AiOutlinePlus} from 'react-icons/ai'

function Header() {
  return (
    <div className='header'>
        <p>Front-End Developer Case Study</p>
        <AiOutlinePlus className='plus-icon' />
    </div>
  )
}

export default Header
