import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

//check if already is user
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  //toggle theme true - false
  const login = () => {
    //sql
    setCurrentUser({
      id: 1,
      name:"Alfred Manuel", 
      profilePic:"https://images.pexels.com/photos/3941855/pexels-photo-3941855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    });
  };

  //set the user to the current user
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};