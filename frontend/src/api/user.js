import http from "../utils/http";

export const registerUser = (user) => {
  return http("POST", "/signup", user);
};

export const changeUserPassword = (data) => {
  return http("POST", "/users/change-password", data);
};
