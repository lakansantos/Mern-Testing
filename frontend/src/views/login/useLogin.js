import {login} from "../../api/auth";
import {useAuthContext} from "../../context/AuthContext";

export const useLogin = () => {
  const {setAuth, setToken} = useAuthContext();

  const loginUser = async (user) => {
    try {
      const response = await login(user);
      const {token} = response;
      setAuth(true);
      setToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  return {onLogin: loginUser};
};
