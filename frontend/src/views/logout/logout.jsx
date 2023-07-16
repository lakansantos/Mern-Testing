import cookies from "../../utils/cookies";
import {AUTH_COOKIE_NAME} from "../../configs/constants";
import {Button} from "reactstrap";

const Logout = () => {
  const handleLogout = () => {
    cookies.remove(AUTH_COOKIE_NAME, {path: "/"});
    window.location.reload();
  };

  return (
    <div onClick={handleLogout} color="primary" className="logout-container">
      Logout
    </div>
  );
};

export default Logout;
