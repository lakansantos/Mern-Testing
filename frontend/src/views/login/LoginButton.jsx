import ButtonTemplate from "../../components/buttons/ButtonTemplate";
import {Link} from "react-router-dom";
import {INDEX_ROUTE_PATH} from "../../configs/constants";
const LoginButton = () => {
  return (
    <Link to={INDEX_ROUTE_PATH.login}>
      <ButtonTemplate buttonTitle={"Login"} btnColor={"light"} />
    </Link>
  );
};

export default LoginButton;
