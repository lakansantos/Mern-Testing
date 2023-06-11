import React, {useContext, useEffect, useState} from "react";
import {createContext} from "react";

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [isAuth, setAuth] = useState(true);

  useEffect(() => {
    setAuth(true);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
export default AuthProvider;
