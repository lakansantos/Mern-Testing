import useGetPosts from "./useGetPosts";
import PagesTable from "../../components/tables/Table";
import { Button } from "reactstrap";
const Home = () => {

    // const data = useContext(DataContext)
    const {data, isLoading} = useGetPosts();

    return (
        <div>
            <h2>This is home</h2>
            <Button color="primary">Test</Button>
            {/* <ul>
                {data?.length > 0 && 
                    data.map((post) => {
                        return (
                            <li key={post._id}>{post.title}</li>
                        )
                    })
                }
            </ul> */}
            <PagesTable 
                data={data}
                isLoading={isLoading}
            />
        </div>
    )
}


export default Home;