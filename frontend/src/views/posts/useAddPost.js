import { useEffect, useState } from "react";
// import { instance } from "../../api/axios";
import { addPost as createPost } from "../../api/post";

const useAddPost = (callback) => {
    const [showAddModal, setShowAddModal] = useState(false)
    const onClose = () => setShowAddModal(!showAddModal)

    const addPost = async (data) => {
        try {
            await createPost(data)
            setShowAddModal(false)

            if(callback) callback();
        } catch (error) {
            console.error('error')
        }
    }

    return {
        showAddModal, 
        setShowAddModal,
        onClose,
        onAdd: addPost
    }
}

export default useAddPost;