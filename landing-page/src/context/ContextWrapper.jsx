import React, { createContext, useState } from 'react'

export const ContestStore = createContext()

const ContextWrapper = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false)
    

  return (
    <>
    <ContestStore.Provider value={[darkTheme, setDarkTheme]} >
        {children}
    </ContestStore.Provider>
    </>
  )
}

export default ContextWrapper