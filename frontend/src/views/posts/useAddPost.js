import { useEffect, useState } from "react";
// import { instance } from "../../api/axios";
import { addPost as createPost } from "../../api/post";

const useAddPost = (callback) => {
    const [showAddModal, setShowAddModal] = useState(false)
    const onClose = () => setShowAddModal(!showAddModal)
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')

    const addPost = async () => {
        try {
            
            await createPost({title, message})
            setShowAddModal(false)

            if(callback) callback();
        } catch (error) {
            console.error('error')
        }
    }

    useEffect(() => {
        if(title, message){
            addPost()
        }
    }, [title, message])

    return {
        showAddModal, 
        setShowAddModal,
        onClose,
        onAdd: addPost
    }
}

export default useAddPost;