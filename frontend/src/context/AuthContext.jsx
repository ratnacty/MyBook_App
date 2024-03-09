import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check local storage for saved authentication status
    const storedAuthStatus = localStorage.getItem("isLoggedIn");
    if (storedAuthStatus) {
      setIsLoggedIn(JSON.parse(storedAuthStatus));
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    // Save authentication status to local storage
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
  };

  const logout = async () => {
    const response = await axios.post("http://localhost:5000/logout");
    console.log(response.data);
    setIsLoggedIn(false);
    // Remove authentication status from local storage
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
