import React, {useContext, useEffect, useState} from "react";
import {createContext} from "react";
import {AUTH_COOKIE_NAME} from "../configs/constants";
import cookies from "../utils/cookies";
export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [token, setToken] = useState(cookies.get(AUTH_COOKIE_NAME) || "");
  const [isAuth, setAuth] = useState(!!token);
  const expires = new Date();
  expires.setDate(expires.getDate() + 1);
  cookies.set(AUTH_COOKIE_NAME, `${token}`, {
    path: "/",
    expires,
  });

  useEffect(() => {
    if (!!token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setAuth,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
export default AuthProvider;
