import {useAuthContext} from "../context/AuthContext";
import {Navigate} from "react-router-dom";
const Auth = ({children}) => {
  const {isAuth} = useAuthContext();

  if (!isAuth) {
    return <Navigate to="views/home" />;
  }

  return <>{children}</>;
};

export default Auth;
