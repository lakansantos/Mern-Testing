import {Link} from "react-router-dom";
import Button from "../../components/buttons/ButtonTemplate";
import {INDEX_ROUTE_PATH} from "../../configs/constants";
const Signup = () => {
  return (
    <Link to={INDEX_ROUTE_PATH.signup}>
      <Button btnColor={"light"} buttonTitle={"Sign up"} />
    </Link>
  );
};

export default Signup;
