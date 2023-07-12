import {useAuthContext} from "../context/AuthContext";
import {Navigate, useLocation} from "react-router-dom";
const PreventLogin = ({children}) => {
  const {isAuth} = useAuthContext();
  const location = useLocation();

  if (isAuth) {
    return (
      <Navigate
        to={{
          pathname: "/views/home",
        }}
      />
    );
  }

  return <>{children}</>;
};

export default PreventLogin;
