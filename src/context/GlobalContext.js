import { createContext, useState } from "react";

export const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
    const [newItem, setNewItem] = useState({})
    const [showPopup, setShowPopup] = useState(false)
    const [newHotel, setNewHotel] = useState([])


    const data = {
        newItem,
        setNewItem,
        newHotel, 
        setNewHotel,
        showPopup,
        setShowPopup
    }

    return(
    <GlobalContext.Provider value = {data}>
        {children}
    </GlobalContext.Provider>
  );
}
export default GlobalProvider