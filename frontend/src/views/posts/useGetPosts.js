import { useEffect, useState } from "react";
import { instance } from "../../api/axios";

const useGetPosts = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const getPosts = async () => {
        try {
            setIsloading(true)
            const response = await instance.get('/posts')
            setData(response.data)
            setIsloading(false)
        } catch (error) {
            console.error('error')
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return {data, isLoading}
}

export default useGetPosts;