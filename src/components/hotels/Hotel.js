import React from 'react'
import './style.css'

function Hotel({hotelsItem}) {
  return (
    <div className='hotel-item'>
        <div className='hotel-item_img'>
            <img src={hotelsItem.img}></img>
        </div>
        <div className='hotel-item_info'>
            <p className='title'>{hotelsItem.title}</p>
            <p className='point'>9.7 puan</p>
            <div className='buttons'>
              <button className='increase'>Puan arttır</button>
              <button className='decrease'>Puan azalt</button>
            </div>
        </div>
    </div>
  )
}

export default Hotel
