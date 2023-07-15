import qs from "qs";
import {useEffect, useState} from "react";

import {createSearchParams, useLocation, useNavigate} from "react-router-dom";
import {INDEX_ROUTE_PATH} from "../../configs/constants";

const useLimitPosts = (meta) => {
  const location = useLocation();
  const {search} = location;
  const navigate = useNavigate();

  const {limit, offset} = meta;
  const [limitRows, setLimitRows] = useState(limit || 5);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggle = () => setDropDownOpen(!dropDownOpen);

  const trimmedQuery = search.substring(1);
  const parsedQuery = qs.parse(trimmedQuery);

  const handleLimit = (selectedLimit) => {
    navigate({
      pathname: INDEX_ROUTE_PATH.home,
      search: createSearchParams({
        ...(parsedQuery || ""),
        offset: offset || 1,
        limit: selectedLimit || 5,
      }).toString(),
    });

    setLimitRows(selectedLimit);
  };

  return {
    limitRows,
    setLimitRows,
    search,
    dropDownOpen,
    toggle: toggle,
    handleLimit,
  };
};

export default useLimitPosts;
