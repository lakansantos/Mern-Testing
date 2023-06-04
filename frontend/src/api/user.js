import http from "../utils/http";

export const registerUser = (user) => {
  return http("POST", "/signup", user);
};
