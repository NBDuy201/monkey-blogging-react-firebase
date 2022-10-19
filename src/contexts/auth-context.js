import React, { createContext, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  // State for context
  const [userInfo, setUserInfo] = React.useState({});

  // State to exports
  const value = { userInfo, setUserInfo };
  return <AuthContext.Provider {...props} value={value}></AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export { AuthProvider, useAuth };
