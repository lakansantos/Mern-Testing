import {useEffect, useState} from "react";
// import { instance } from "../../api/axios";
import {addPost as createPost} from "../../api/post";
import {useNavigate} from "react-router-dom";

const useAddPost = (callback) => {
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const onClose = () => {
    setShowAddModal(!showAddModal);
    navigate(-1);
  };

  const addPost = async (data) => {
    try {
      await createPost(data);
      onClose();

      if (callback) callback();
    } catch (error) {
      console.error("error");
    }
  };

  return {
    showAddModal,
    setShowAddModal,
    onClose,
    onAdd: addPost,
  };
};

export default useAddPost;
