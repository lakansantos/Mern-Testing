import {Link} from "react-router-dom";
import {Form, Button, Input, FormGroup} from "reactstrap";
import React from "react";
import {useLocation} from "react-router-dom";
import {formSubmit} from "../../utils/form";
import {useNavigate} from "react-router-dom";

export const search = () => {
  const navigate = useNavigate();
  const handleSearch = (data) => {
    //   const {navigate} = search();
    console.log(data);
    navigate(`/views/home?search=${data.search}`);
  };
  return {
    navigate,
    handleSearch,
  };
};

const HomeActionHeaders = ({setShowAddModal}) => {
  const {handleSearch} = search();
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
