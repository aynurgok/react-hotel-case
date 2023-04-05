import React, {useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import './style.css'
import {AiOutlinePlus} from 'react-icons/ai'

function Header() {

  const {newItem, setNewItem, newHotel, setNewHotel,showPopup, setShowPopup} = useContext(GlobalContext)

  const handleAdd = () => {
    setNewHotel([...newHotel, newItem])
    console.log(newItem)
    setShowPopup(false)
  }
  return (
    <div className='header-container'>
        <div className='header'>
        <p>Front-End Developer Case Study</p>
        <AiOutlinePlus className='plus-icon' onClick={() => setShowPopup(true)}/>
        {
          showPopup && 
          <div className='popupScreen'>
            <p>Otel ekle</p>
             <div className='input-btn'>
              <input value={newHotel.name} onChange = {(e) => setNewItem(e.target.value)} type="text"  />
              <button onClick={handleAdd} >Ekle</button>
             </div>
          </div>
        }
        </div>
        <div className='dropdown-container'>
          <button className='filter'>Sıralama</button>
          <nav tabIndex={2}>
            <ul>
              <li>Puan(artan)</li>
              <li>Puan(azalan)</li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Header
