import {login} from "../../api/auth";
import {useAuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";
export const useLogin = () => {
  const {setAuth, setToken} = useAuthContext();

  const loginUser = async (user) => {
    try {
      await login(user);
      setAuth(true);
    } catch (error) {
      console.error(error);
    }
  };

  return {onLogin: loginUser};
};
