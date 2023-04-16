import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../api/axios";
const useGetData = () => {
    const [message, setMessage] = useState('')
    const fetchData = async() => {
       try {
        const data = await instance.get('/')
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