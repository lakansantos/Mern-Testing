import useGetPosts from "../posts/useGetPosts";
import useAddPost from "../posts/useAddPost";
import PagesTable from "../../components/tables/Table";
import PostAddModal from "../posts/PostAddModal";
import { Button } from "reactstrap";
import useDeletePost from "../posts/useDeletePost";
import PostDeleteModal from "../posts/PostDeleteModal";

const Home = () => {

    const {data, isLoading, reload} = useGetPosts();
    const {
        showAddModal,
        setShowAddModal,
        onClose,
        onAdd
    } = useAddPost(reload)

    const {
        handleDeleteToggle, 
        onDelete,
        dataToDelete,
        toggleDelete,
        showDeleteModal
    } = useDeletePost(reload)
    return (
        <div className="home-page">

            <header>
                <Button color="primary" onClick={() => setShowAddModal(true)}>Add Post</Button>
            </header>
            
            <PostAddModal 
                onClose={onClose}
                showAddModal={showAddModal}
                onSubmit={onAdd}
            />

            <PostDeleteModal 
                onClose={toggleDelete}
                dataToDelete={dataToDelete}
                isOpen={showDeleteModal}
                onSubmit={onDelete}
            />

            <PagesTable 
                data={data}
                handleDeleteToggle={handleDeleteToggle}
                isLoading={isLoading}

            />
        </div>
    )
}


export default Home;