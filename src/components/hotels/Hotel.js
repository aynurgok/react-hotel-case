import React, {useState} from 'react'
import './style.css'
import HotelsData from '../../HotelsData'

function Hotel({hotelsItem}) {
  const [scores, setScores] = useState(HotelsData)

  const updatesScore = (itemIndex, newScore) => {
    setScores(prevState => {
      const newObje = [...prevState];
      newObje[itemIndex].score = newScore;
      return newObje;
    })
  }
 
  return (
        <div>
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
                    <button className='increase' onClick={() => updatesScore(index, obje.score + 1)}>
                      Arttır
                    </button>
                    <button className='decrease' onClick={() => updatesScore(index, obje.score - 1)}>
                      Azalt
                    </button>
                </div>
              </div>
            </div>
            ))
          }
        </div>
  )
}

export default Hotel
