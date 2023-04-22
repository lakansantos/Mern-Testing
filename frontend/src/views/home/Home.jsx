import useGetPosts from "../posts/useGetPosts";
import useAddPost from "../posts/useAddPost";
import PagesTable from "../../components/tables/Table";
import PostAddModal from "../posts/PostAddModal";
import { Button } from "reactstrap";
const Home = () => {

    const {data, isLoading, reload} = useGetPosts();
    const {
        showAddModal,
        setShowAddModal,
        onClose,
        onAdd
    } = useAddPost(reload)
    
    return (
        <div className="home-page">

            <header>
                <Button color="primary" onClick={() => setShowAddModal(true)}>Add Post</Button>
            </header>
            
            <PostAddModal 
                onClose={onClose}
                showAddModal={showAddModal}
                onAdd={onAdd}
            />
            <PagesTable 
                data={data}
                isLoading={isLoading}
            />
        </div>
    )
}


export default Home;