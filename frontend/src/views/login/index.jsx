import {Form} from "reactstrap";
import LoginForm from "./LoginForm";
import {useLogin} from "./useLogin";
const Index = () => {
  const {onLogin} = useLogin();
  return (
    <div className="form-wrapper">
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default Index;
