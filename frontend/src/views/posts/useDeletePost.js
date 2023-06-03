import {useState} from "react";
import {deletePost, getPost} from "../../api/post";
import {useNavigate} from "react-router-dom";

const useDeletePost = (callback) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [id, setId] = useState("");

  const navigate = useNavigate();
  const toggleDelete = () => {
    setShowDeleteModal(!showDeleteModal);
    navigate(-1);
  };
  const [dataToDelete, setDataToDelete] = useState("");

  const handleDeleteToggle = async (postId) => {
    setShowDeleteModal(true);
    const response = await getPost(postId);
    setId(postId);
    setDataToDelete(response);
  };
  const deleteData = async () => {
    try {
      const response = await deletePost(id);
      toggleDelete();

      if (callback) callback();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleDeleteToggle,
    onDelete: deleteData,
    dataToDelete,
    toggleDelete,
    setShowDeleteModal,
    showDeleteModal,
  };
};

export default useDeletePost;
