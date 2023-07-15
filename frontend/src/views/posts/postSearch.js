import {useNavigate} from "react-router-dom";
import {createSearchParams} from "react-router-dom";
import {INDEX_ROUTE_PATH} from "../../configs/constants";

export const postSearch = (limitRows) => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    const {search} = query;

    if (!!search) {
      navigate({
        pathname: INDEX_ROUTE_PATH.home,
        search: createSearchParams({
          search: search,
          limit: 5,
        }).toString(),
      });
    } else {
      navigate({
        pathname: INDEX_ROUTE_PATH.home,
        search: createSearchParams({
          search: "",
          limit: limitRows,
        }).toString(),
      });
    }
  };
  return {
    navigate,
    handleSearch,
  };
};
