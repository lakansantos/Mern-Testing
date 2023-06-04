import {FormGroup} from "reactstrap";
const FormContainer = ({children}) => {
  return (
    <FormGroup className="input-box" floating>
      {children}
    </FormGroup>
  );
};

export default FormContainer;
