import {useEffect, useState} from "react";
// import { instance } from "../../api/axios";
import {addPost as createPost} from "../../api/post";
import {useNavigate} from "react-router-dom";
import {errorPop, successPop} from "../../components/Toast/Toast";

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
      successPop("Added post successfully");
      if (callback) callback();
    } catch (error) {
      errorPop(error);
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
