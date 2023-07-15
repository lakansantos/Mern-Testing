import {MODAL_ROUTE_PATH} from "../configs/constants";
import {PostAddModal, PostDeleteModal, Home} from "../views";
import PostEditModal from "../views/posts/PostEditModal";
import Login from "../views/login";
import SignUp from "../views/signup";
import Auth from "../utils/Auth";
import PreventLogin from "../utils/PreventAccess";
import UserChangePasswordForm from "../components/Forms/UserSettings/UserChangePasswordForm";
import ChangePassword from "../views/settings/change_password";
const ROUTE_MODAL_COMPONENT = [
  {
    path: MODAL_ROUTE_PATH.create_user,
    component: <PostAddModal />,
  },
  {
    path: MODAL_ROUTE_PATH.delete_user,
    component: <PostDeleteModal />,
  },
  {
    path: MODAL_ROUTE_PATH.edit_user,
    component: <PostEditModal />,
  },
];

const ROUTE_INDEX_COMPONENT = [
  {
    path: "/views/home",
    component: (
      <Auth>
        <Home />
      </Auth>
    ),
  },
  {
    path: "/",
    component: (
      <PreventLogin>
        <Auth>
          <Home />
        </Auth>
      </PreventLogin>
    ),
  },

  {
    path: "/login",
    component: (
      <PreventLogin>
        <Login />
      </PreventLogin>
    ),
  },
  {
    path: "/signup",
    component: <SignUp />,
  },
  {
    path: "/settings/change-password",
    component: (
      <Auth>
        <ChangePassword />
      </Auth>
    ),
  },
];

export {ROUTE_INDEX_COMPONENT, ROUTE_MODAL_COMPONENT};
