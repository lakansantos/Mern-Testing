import axios from "axios";
import {API_URL} from "../configs/environment";
import {AUTH_COOKIE_NAME} from "../configs/constants";
import cookies from "./cookies";
export const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  mode: "no-cors",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  },
  credentials: "same-origin",
});

instance.interceptors.request.use((config) => {
  if (cookies.get(AUTH_COOKIE_NAME)) {
    config.headers.Authorization = `Bearer ${cookies.get(AUTH_COOKIE_NAME)}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const {message} = error || {};

    if (message === "jwt expired") {
      cookies.remove(AUTH_COOKIE_NAME);
      window.location.replace("/");
    }

    return Promise.reject(error);
  }
);

export default async function http(method, url, data) {
  const options = {method, url};
  if (method.toUpperCase() === "GET" || method.toUpperCase() === "DELETE") {
    options.params = {...data};
  } else {
    options.data = data;
  }
  const response = await instance(options);
  const {data: dataResponse} = response;
  return dataResponse;
}
