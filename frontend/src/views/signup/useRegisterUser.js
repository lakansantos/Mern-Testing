import {registerUser} from "../../api/user";

export const useRegisterUser = () => {
  const signUp = async (user) => {
    try {
      await registerUser(user);
    } catch (e) {
      if (!e?.response) {
        console.error("No server response");
        setErrorMessage(ERROR_MESSAGE.server_response);
        return errorPop("No server response");
      } else if (e.response.status === 400) {
        console.error("Missing email or password");
        setErrorMessage("Missing email or password");
      } else if (e.response.status === 401) {
        console.error("Unathorized");
        return errorPop("Unathorized");
      } else {
        console.error("Sign up Failed");
        setErrorMessage(ERROR_MESSAGE.user_taken);
      }
    }
  };

  return {
    onSubmit: signUp,
  };
};
