import axios from "axios"
import { API_URL } from "../configs/environment";

export const instance = axios.create({
    baseURL:API_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
})  


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