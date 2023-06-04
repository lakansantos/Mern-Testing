import {Form, FormGroup, Input, Label, Button} from "reactstrap";
import FormContainer from "../../components/forms/FormContainer";
import {Link} from "react-router-dom";
const LoginForm = () => {
  return (
    <Form className="form">
      <FormGroup>
        <h1>Login</h1>
      </FormGroup>
      <FormContainer>
        <Input name="username" placeholder="Username" type="text" />
        <Label>Username</Label>
      </FormContainer>
      <FormContainer>
        <Input name="password" placeholder="password" type="password" />
        <Label>Password</Label>
      </FormContainer>
      <div>
        <p>
          Don't have an account?{" "}
          <span>
            <Link
              to={"/signup"}
              style={{
                color: "black",
              }}
            >
              Create an account
            </Link>
          </span>
        </p>
      </div>
      <FormContainer>
        <Button color="primary">Submit</Button>
      </FormContainer>
    </Form>
  );
};

export default LoginForm;
