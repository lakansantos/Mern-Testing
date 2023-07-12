import {useState} from "react";
import {editPost, getPost} from "../../api/post";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const useEditPost = (callback) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [id, setId] = useState("");

  const [dataToEdit, setDataToEdit] = useState({});
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const toggleEdit = () => {
    setShowEditModal(!showEditModal);
    navigate(-1);
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleEditToggle = async (postId) => {
    setShowEditModal(true);
    setId(postId);
  };

  const getData = async () => {
    setIsLoading(true);
    const response = await getPost(id);
    const {data} = response;
    setDataToEdit(data);
    setIsLoading(false);
  };

  const editData = async (data) => {
    try {
      await editPost(id, data);
      setShowEditModal(false);
      setData(data);
      navigate(-1);
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
