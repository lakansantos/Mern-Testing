import {Link} from "react-router-dom";
import {Form, Button, Input, FormGroup} from "reactstrap";
import React from "react";
import {useLocation} from "react-router-dom";
import {formSubmit} from "../../utils/form";
import {useNavigate} from "react-router-dom";
import {createSearchParams} from "react-router-dom";
import {INDEX_ROUTE_PATH} from "../../configs/constants";
import {postSearch} from "../posts/postSearch";

const HomeActionHeaders = ({setShowAddModal, limitRows}) => {
  const {handleSearch} = postSearch(limitRows);
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
