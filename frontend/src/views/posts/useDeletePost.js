import { useState } from "react";
import { deletePost, getPost } from "../../api/post";


const useDeletePost = (callback) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [id, setId] = useState('')
    const toggleDelete = () => setShowDeleteModal(!showDeleteModal)
    const [dataToDelete, setDataToDelete] = useState('')


    const handleDeleteToggle = async(postId) => {
        setShowDeleteModal(true)
        const response = await getPost(postId);
        setId(postId);
        setDataToDelete(response)
        console.log(response)

    }
    const deleteData = async () => {
        try {
            const response = await deletePost(id)
            setShowDeleteModal(false)

            if(callback) callback();
        } catch (error) {
            console.error(error)
        }
    }

    return {
        handleDeleteToggle, 
        onDelete: deleteData,
        dataToDelete,
        toggleDelete,
        setShowDeleteModal,
        showDeleteModal
    }
}

export default useDeletePost;