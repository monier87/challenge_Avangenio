import { ReactNode, createContext, useContext, useState } from "react";

const ThemeContext = createContext({})

type Props = {
    children: string | JSX.Element | JSX.Element[] 
// |()=>JSX.Element
  }
 

export const ThemeContextProvider = ({ children }:Props) => {
    const [theme, setTheme] = useState<boolean>(true);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeContext = () => useContext(ThemeContext);