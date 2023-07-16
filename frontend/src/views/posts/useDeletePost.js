import {useState} from "react";
import {deletePost, getPost} from "../../api/post";
import {useNavigate} from "react-router-dom";
import {errorPop, successPop} from "../../components/Toast/Toast";

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
    const {data} = response;
    setId(postId);
    setDataToDelete(data);
  };
  const deleteData = async () => {
    try {
      const response = await deletePost(id);
      toggleDelete();
      successPop("Deleted the post successfully");

      if (callback) callback();
    } catch (error) {
      errorPop("Something went wrong");
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
