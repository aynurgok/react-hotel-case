import React, {useState, useContext} from 'react'
import './style.css'
import HotelsData from '../../HotelsData'
import { GlobalContext } from '../../context/GlobalContext'


function Hotel({hotelsItem}) {
  const [scores, setScores] = useState(HotelsData)
  const {newItem, setNewItem, newHotel, setNewHotel} = useContext(GlobalContext)


  const updateScore = (itemIndex, newScore) => {
    setScores(prevState => {
      const newObje = [...prevState];
      newObje[itemIndex].score = newScore;
      return newObje;
    });
  };
  return (
        <div className='hotels-container'>
          {
            scores.map((obje, index) => (
              <div key={index} className='hotel-item'>
                 <div className='hotel-item_img'>
                 <img src={hotelsItem.img}></img>
                 </div>
                 <div className='hotel-item_info'>
                  <p className='title' >{obje.title}</p>
                  <p className='point'>Score: {obje.score}</p>
                  <div className='buttons'>
                    <button className='increase' onClick={() => updateScore(index, obje.score + 1)}>
                      Arttır
                    </button>
                    <button className='decrease' onClick={() => updateScore(index,parseFloat( obje.score - 1))}>
                      Azalt
                    </button>
                </div>
              </div>
            </div>
            ))
          }
          {
            newHotel.map(item =>(
              <div className='hotel-item'>
                <div className='hotel-item_img'>
                  <img src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'></img>
                </div>
                 <div className='hotel-item_info'>
                    <p className='title' >{item}</p>
                    <p className='point'>Score: 6.7</p>
                </div>
            </div>
            ))
          }
          
        </div>
  )
}

export default Hotel
