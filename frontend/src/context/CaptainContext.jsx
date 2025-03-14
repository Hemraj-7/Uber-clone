import React, { createContext, useState } from 'react'

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null)
    const [isloading, setIsloading] = useState(false)
    const [error, setError] = useState(null)

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    // const updateCaptain = (captainData) => {
    //     console.log("Updating captain with data:", captainData);
    //     setCaptain(captainData);
    // };

    const value = {
        captain,
        setCaptain,
        isloading,
        setIsloading,
        error,
        setError,
        updateCaptain
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default CaptainContext
