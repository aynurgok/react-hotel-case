import React from 'react';
import Header from './components/header/Header';
import HotelsList from './components/hotels/HotelsList';
import './GlobalStyle.css'

function App() {
  return (
    <div className='app' >
      <Header />
      <HotelsList />
    </div>
  );
}

export default App;
