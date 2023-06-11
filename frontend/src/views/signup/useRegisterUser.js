import {registerUser} from "../../api/user";

export const useRegisterUser = () => {
  const signUp = async (user) => {
    try {
      await registerUser(user);
    } catch (e) {
      if (!e?.response) {
        console.error("No server response");
      } else if (e.response.status === 400) {
        console.error("Missing email or password");
      } else if (e.response.status === 401) {
        console.error("Unathorized");
      } else {
        console.error("Sign up Failed");
      }
    }
  };

  return {
    onSubmit: signUp,
  };
};
