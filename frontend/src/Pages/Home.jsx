import { DataContext } from "../App";
import { useContext } from "react";
const Home = () => {

    const data = useContext(DataContext)
    return (
    <div>
        <h2>This is home</h2>
        <h2>{data?.results[0].title.english}</h2>

    </div>
    )
}


export default Home;