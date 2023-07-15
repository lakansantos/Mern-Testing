import React from "react";
import {Button, Form, FormGroup} from "reactstrap";
import {formSubmit} from "../../utils/form";

const FormSubmit = (props) => {
  const {onSubmit, children} = props;
  return (
    <Form className="form" onSubmit={formSubmit(onSubmit)} noValidate>
      {children}

      <FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </FormGroup>
    </Form>
  );
};

export default FormSubmit;
