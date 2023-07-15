import {Form, FormGroup, Input, Label, Button, FormFeedback} from "reactstrap";
import {FormContainer, FormSubmit} from "../../components/Forms";
import {Link} from "react-router-dom";

const LoginForm = ({onLogin}) => {
  return (
    <FormSubmit className="form" onSubmit={onLogin} noValidate>
      <FormGroup>
        <h1>Login</h1>
      </FormGroup>
      <FormContainer>
        <Input
          name="userName"
          placeholder="Username"
          type="text"
          data-testid="userName-input"
          required
        />
        <Label>Username</Label>
        <FormFeedback data-testid="userName-feedback">Required</FormFeedback>
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
    </FormSubmit>
  );
};

export default LoginForm;
