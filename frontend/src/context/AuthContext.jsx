import React, {useContext, useEffect, useState} from "react";
import {createContext} from "react";
import {AUTH_COOKIE_NAME} from "../configs/constants";
import cookies from "../utils/cookies";
export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState(cookies.get(AUTH_COOKIE_NAME) || "");

  const expires = new Date();
  expires.setDate(expires.getDate() + 1);
  cookies.set(AUTH_COOKIE_NAME, `${token}`, {
    path: "/",
    expires,
  });
  useEffect(() => {
    const storedToken = cookies.get(AUTH_COOKIE_NAME);
    if (storedToken) {
      setToken(storedToken);
      setAuth(true);
    }
  }, []);

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
