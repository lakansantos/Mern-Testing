import {useNavigate} from "react-router-dom";
import {createSearchParams} from "react-router-dom";
import {INDEX_ROUTE_PATH} from "../../configs/constants";

export const postSearch = () => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    const {search} = query;

    if (!!search) {
      navigate({
        pathname: INDEX_ROUTE_PATH.home,
        search: createSearchParams({
          search: search,
        }).toString(),
      });
    } else {
      navigate(INDEX_ROUTE_PATH.home);
    }
  };
  return {
    navigate,
    handleSearch,
  };
};
