import React, { useState } from 'react'
import './style.css'
import {AiOutlinePlus} from 'react-icons/ai'

function Header() {

  const [showPopup, setShowPopup] = useState(false)
  
  return (
    <div className='header'>
        <p>Front-End Developer Case Study</p>
        <AiOutlinePlus className='plus-icon' onClick={() => setShowPopup(true)}/>
        {
          showPopup && 
          <div className='popupScreen'>
            <p>Otel ekle</p>
            <input />
          </div>
        }
    </div>
  )
}

export default Header
