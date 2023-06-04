import {Form, FormGroup, Input, Label, Button, FormFeedback} from "reactstrap";
import FormContainer from "../../components/forms/FormContainer";
import {formSubmit} from "../../utils/form";
const SignupForm = ({onSubmit}) => {
  return (
    <Form className="form" onSubmit={formSubmit(onSubmit)} noValidate>
      <FormGroup>
        <h1>Sign up</h1>
      </FormGroup>
      <FormContainer>
        <Input
          name="firstName"
          placeholder="First Name"
          type="text"
          data-testid="firstname-input"
          required
        />
        <Label>First Name</Label>
        <FormFeedback data-testid="firstname-feedback">Required</FormFeedback>
      </FormContainer>
      <FormContainer>
        <Input
          name="lastName"
          placeholder="Last Name"
          type="text"
          data-testid="lastname-input"
          required
        />
        <Label>Last Name</Label>
        <FormFeedback data-testid="lastname-feedback">Required</FormFeedback>
      </FormContainer>
      <FormContainer>
        <Input
          name="email"
          placeholder="email"
          type="email"
          data-testid="email-input"
          required
        />
        <Label>Email</Label>
        <FormFeedback data-testid="email-feedback">Required</FormFeedback>
      </FormContainer>
      <FormContainer>
        <Input
          name="userName"
          placeholder="Username"
          type="text"
          data-testid="username-input"
          required
        />
        <Label>Username</Label>
        <FormFeedback data-testid="username-feedback">Required</FormFeedback>
      </FormContainer>
      <FormContainer>
        <Input
          name="password"
          placeholder="password"
          type="password"
          data-testid="password-input"
          required
        />
        <Label>Password</Label>
        <FormFeedback data-testid="password-feedback">Required</FormFeedback>
      </FormContainer>
      <FormContainer>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </FormContainer>
    </Form>
  );
};

export default SignupForm;
