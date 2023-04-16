import { DataContext } from "../App";
import { useContext } from "react";
import useGetData from "../components/useGetData";
import useGetPosts from "../views/posts/useGetPosts";
const Home = () => {

    // const data = useContext(DataContext)
    const {message} = useGetData();
    const {data} = useGetPosts();
    console.log(data)

    return (
    <div>
        <h1>{message}</h1>
        <h2>This is home</h2>
        {/* <h2>{data?.results[0].title.english}</h2> */}
        
        <ul>
            {data.length > 0 && 
                data.map((post) => {
                    return (
                        <li key={post.postId}>{post.title}</li>
                    )
                })
            }
        </ul>

    </div>
    )
}


export default Home;