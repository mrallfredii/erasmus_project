import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

//change mode for all the children and mantain the theme getting the local storage with a boolean
export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  //toggle theme true - false
  const toggle = () => {
    setDarkMode(!darkMode);
  };

  //set the local storage darkMode
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};
