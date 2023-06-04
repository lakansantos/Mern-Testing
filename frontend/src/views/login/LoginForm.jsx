import {Form, FormGroup, Input, Label, Button} from "reactstrap";
import FormContainer from "../../components/forms/FormContainer";
const LoginForm = () => {
  return (
    <Form className="login-form">
      <FormGroup className="">
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
      <FormContainer>
        <Button color="primary">Login</Button>
      </FormContainer>
    </Form>
  );
};

export default LoginForm;
