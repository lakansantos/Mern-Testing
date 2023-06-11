import {useEffect, useState} from "react";
import {getPosts} from "../../api/post";

const useGetPosts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const getData = async () => {
    try {
      setIsloading(true);
      const response = await getPosts();
      setData(response);
      setIsloading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    isLoading,
    reload: getData,
  };
};

export default useGetPosts;
