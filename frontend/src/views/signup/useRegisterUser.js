import {registerUser} from "../../api/user";
import {useNavigate} from "react-router-dom";
import {errorPop, successPop} from "../../components/Toast/Toast";
export const useRegisterUser = () => {
  const navigate = useNavigate();
  const signUp = async (user) => {
    try {
      const response = await registerUser(user);
      const {message} = response;

      successPop(message);

      navigate("/login");
    } catch (e) {
      if (!e?.response) {
        console.error("No server response");
        errorPop("No server response");
      } else if (e.response.status === 400) {
        console.error("Missing email or password");
        errorPop("Username is already taken");
      } else if (e.response.status === 401) {
        console.error("Unathorized");
        errorPop("Unauthorized");
      } else {
        console.error("Sign up Failed");
        errorPop("Sign up failed");
      }
    }
  };

  return {
    onSubmit: signUp,
  };
};
