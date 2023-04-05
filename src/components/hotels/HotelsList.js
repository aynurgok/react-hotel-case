import React from 'react'
import HotelsData from '../../HotelsData'
import Hotel from './Hotel'
import './style.css'

function HotelsList() {
  return (
    <div>
        {
            HotelsData.map(hotelsItem => (
                <Hotel key={hotelsItem.id} hotelsItem= {hotelsItem} />
            ))
        }
    </div>
  )
}

export default HotelsList
