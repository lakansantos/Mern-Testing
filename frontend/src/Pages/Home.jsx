import { DataContext } from "../App";
import { useContext } from "react";
import useGetData from "../components/useGetData";
const Home = () => {

    const data = useContext(DataContext)
    const {message} = useGetData();

    return (
    <div>
        <h1>{message}</h1>
        <h2>This is home</h2>
        <h2>{data?.results[0].title.english}</h2>

    </div>
    )
}


export default Home;