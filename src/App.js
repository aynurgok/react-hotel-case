import React from 'react';
import Header from './components/header/Header';
import HotelsList from './components/hotels/HotelsList';
import GlobalProvider from './context/GlobalContext';
import './GlobalStyle.css'

function App() {
  return (
    <div className='app' >
     
      <GlobalProvider>
        <Header />
        <HotelsList />
      </GlobalProvider>
    </div>
  );
}

export default App;
