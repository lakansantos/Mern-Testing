import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { instance } from "../api/axios";
const useGetData = () => {
    const [message, setMessage] = useState('')
    const fetchData = async() => {
       try {
        const data = await instance.get('/api/v1')
            setMessage(data.data.mssg)
       } catch (error) {
        console.error(error)
       }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {message}
}


export default useGetData;