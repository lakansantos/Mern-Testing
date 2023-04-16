import axios from "axios"
import { API_URL } from "../configs/environment";

export const instance = axios.create({
    baseURL:API_URL
})  

