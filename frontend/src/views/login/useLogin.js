import {login} from "../../api/auth";
import {useAuthContext} from "../../context/AuthContext";
import {errorPop, successPop} from "../../components/Toast/Toast";

export const useLogin = () => {
  const {setAuth, setToken} = useAuthContext();

  const loginUser = async (user) => {
    try {
      const response = await login(user);
      const {token} = response;
      setAuth(true);
      setToken(token);
      successPop("Logged in successfully");
    } catch (error) {
      const {response} = error;
      const {data} = response;
      const {mssg} = data;
      errorPop(mssg);
      console.error(error);
    }
  };

  return {onLogin: loginUser};
};
