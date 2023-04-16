import { useEffect, useState } from "react";
import { instance } from "../../api/axios";

const useGetPosts = () => {
    const [data, setData] = useState([])
    const getPosts = async () => {
        const response = await instance.get('/posts')
        setData(response.data.posts)
        console.log(response.data.posts)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return {data}
}

export default useGetPosts;