import {useEffect, useState} from "react";
import {getPosts} from "../../api/post";
import {useLocation} from "react-router-dom";
const useGetPosts = () => {
  const [data, setData] = useState([]);
  const {search} = useLocation();
  const [isLoading, setIsloading] = useState(false);

  const getData = async () => {
    try {
      setIsloading(true);
      const response = await getPosts(search);
      const {data} = response;
      setData(data);
      setIsloading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return {
    data,
    isLoading,
    reload: getData,
  };
};

export default useGetPosts;
