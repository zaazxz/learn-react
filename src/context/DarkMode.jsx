import { createContext, useState } from "react";

// Creating Context
const DarkModeContext = createContext()

// Context Provider
const DarkModeContextProvider = ({ children }) => {

    // Initialize State
    const [isDarkMode, setIsDarkMode] = useState(true)

    // Returning Context
    return (
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )

}

export const DarkMode = DarkModeContext
export default DarkModeContextProvider