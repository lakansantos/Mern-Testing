import {Form, FormGroup, Input, Label, Button} from "reactstrap";
import FormContainer from "../../components/forms/FormContainer";
const SignupForm = () => {
  return (
    <Form className="form">
      <FormGroup>
        <h1>Sign up</h1>
      </FormGroup>
      <FormContainer>
        <Input name="first-name" placeholder="First Name" type="text" />
        <Label>First Name</Label>
      </FormContainer>
      <FormContainer>
        <Input name="last-name" placeholder="Last Name" type="text" />
        <Label>Last Name</Label>
      </FormContainer>
      <FormContainer>
        <Input name="email" placeholder="email" type="email" />
        <Label>Email</Label>
      </FormContainer>
      <FormContainer>
        <Input name="username" placeholder="Username" type="text" />
        <Label>Username</Label>
      </FormContainer>
      <FormContainer>
        <Input name="password" placeholder="password" type="password" />
        <Label>Password</Label>
      </FormContainer>
      <FormContainer>
        <Button color="primary">Submit</Button>
      </FormContainer>
    </Form>
  );
};

export default SignupForm;
