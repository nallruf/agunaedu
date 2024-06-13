import axios from "axios";
import React, { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "./uselocalstorage";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("token", null);
  const [expirationTime, setExpirationTime] = useLocalStorage(
    "tokenExpiration",
    null
  );
  const navigate = useNavigate();

  const login = (data) => {
    const expirationTime = new Date().getTime() + 3600 * 1000;
    setUser(data.token);
    setExpirationTime(expirationTime);
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    setUser(null);
    setExpirationTime(null);
    delete axios.defaults.headers.common["Authorization"];
    navigate("/", { replace: true });
  };

  const isTokenExpired = () => {
    const currentTime = new Date().getTime();
    return currentTime > expirationTime;
  };

  useEffect(() => {
    if (user && expirationTime) {
      const interval = setInterval(() => {
        if (isTokenExpired()) {
          logout();
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [user, expirationTime]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
