import {useState} from "react";
import {editPost, getPost} from "../../api/post";
import {useEffect} from "react";
const useEditPost = (callback) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [id, setId] = useState("");
  const toggleEdit = () => setShowEditModal(!showEditModal);
  const [dataToEdit, setDataToEdit] = useState({});
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleEditToggle = async (postId) => {
    setShowEditModal(true);
    setId(postId);
  };

  const getData = async () => {
    setIsLoading(true);
    const response = await getPost(id);
    console.log(response);
    setDataToEdit(response);
    setIsLoading(false);
  };

  const editData = async (data) => {
    try {
      await editPost(id, data);
      setShowEditModal(false);
      setData(data);
      if (callback) callback();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (id) getData();
    else setDataToEdit({});
  }, [id, data]);

  return {
    handleEditToggle,
    onEdit: editData,
    dataToEdit,
    toggleEdit,
    setShowEditModal,
    showEditModal,
    isEditting: isLoading,
  };
};

export default useEditPost;
