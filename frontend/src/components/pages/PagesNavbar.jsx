import {Link, useLocation} from "react-router-dom";
import {useState} from "react";

import Logout from "../../views/logout/logout";
import {useAuthContext} from "../../context/AuthContext";
import Signup from "../../views/signup/SignupButton";
import {INDEX_ROUTE_PATH} from "../../configs/constants";
import Login from "../../views/login/LoginButton";
import avatar from "../../assets/icons/avatar.png";

const PagesNavbar = () => {
  const {isAuth} = useAuthContext();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-primary">
      <ul className="d-flex justify-content-between w-100 mx-3">
        <li>
          <a href="/views/home">Home</a>
        </li>
        <li>
          {isAuth ? (
            <div
              className="settings-wrapper"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div>
                <img src={avatar} alt="user-settings" className="img-avatar" />
              </div>
              {isOpen && (
                <div className="settings-menu">
                  <Link
                    to={"/settings/change-password"}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      width: "100%",
                    }}
                  >
                    <div className="settings-container">Change password</div>
                  </Link>
                  <Logout />
                </div>
              )}
            </div>
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
