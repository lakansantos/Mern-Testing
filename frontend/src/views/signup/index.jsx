import SignupForm from "./SignupForm";
import {useRegisterUser} from "./useRegisterUser";
const Index = () => {
  const {onSubmit} = useRegisterUser();
  return (
    <div className="form-wrapper">
      <SignupForm onSubmit={onSubmit} />
    </div>
  );
};

export default Index;
