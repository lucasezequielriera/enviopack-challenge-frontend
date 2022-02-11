import React, { createContext, useState } from 'react';
import userData from "../config/data/profile.json"

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [user, setUser] = useState(userData.profile);
    const [selectedProducts, setSelectedProducts] = useState([])
    const [isPress, setIsPress] = useState({})
    const [total, setTotal] = useState(0)
    const [resolve, setResolve] = useState()

    return(
        <DataContext.Provider value={{
            user, setUser, selectedProducts, setSelectedProducts, isPress, setIsPress, total, setTotal, resolve, setResolve
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider