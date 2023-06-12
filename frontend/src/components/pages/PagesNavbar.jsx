import Logout from "../../views/logout/logout";
import {useAuthContext} from "../../context/AuthContext";
import Signup from "../../views/signup/SignupButton";
import {useLocation} from "react-router-dom";
import {INDEX_ROUTE_PATH} from "../../configs/constants";
import Login from "../../views/login/LoginButton";
const PagesNavbar = () => {
  const {token} = useAuthContext();
  const location = useLocation();

  return (
    <nav className="bg-primary">
      <ul className="d-flex justify-content-between w-100 mx-3">
        <li>
          <a href="/views/home">Home</a>
        </li>
        <li>
          {token ? (
            <Logout />
          ) : location.pathname === INDEX_ROUTE_PATH.signup ? (
            <Login />
          ) : (
            <Signup />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default PagesNavbar;
