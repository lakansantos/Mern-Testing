import {Link} from "react-router-dom";
import {Form, Button, Input, FormGroup} from "reactstrap";
import React from "react";
import {useLocation} from "react-router-dom";
import {formSubmit} from "../../utils/form";
import {useNavigate} from "react-router-dom";
import {createSearchParams} from "react-router-dom";
import {INDEX_ROUTE_PATH} from "../../configs/constants";

export const searchPost = () => {
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

const HomeActionHeaders = ({setShowAddModal}) => {
  const {handleSearch} = searchPost();
  const location = useLocation();
  return (
    <>
      <FormGroup>
        <Form onSubmit={formSubmit(handleSearch)}>
          <Input
            name="search"
            placeholder="Search a title"
            type="text"
            data-testid="search-input"
          />
        </Form>
      </FormGroup>
      <Link to="/create/post" state={{background: location}}>
        <Button color="primary" onClick={() => setShowAddModal(true)}>
          Add Post
        </Button>
      </Link>
    </>
  );
};

export default HomeActionHeaders;
