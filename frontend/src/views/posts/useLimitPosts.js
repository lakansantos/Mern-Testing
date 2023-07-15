import {useState} from "react";

import {createSearchParams, useLocation, useNavigate} from "react-router-dom";

const useLimitPosts = (meta) => {
  const location = useLocation();
  const {search} = location;
  const navigate = useNavigate();

  const {limit} = meta;
  const [limitRows, setLimitRows] = useState(limit || 5);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggle = () => setDropDownOpen(!dropDownOpen);

  const handleLimit = (item) => {
    navigate({
      pathname: "/views/home",
      search: createSearchParams({
        limit: item || 5,
      }).toString(),
    });

    setLimitRows(item);
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
