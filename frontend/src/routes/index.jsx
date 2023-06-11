import {MODAL_ROUTE_PATH} from "../configs/constants";
import {PostAddModal, PostDeleteModal, Home} from "../views";
import PostEditModal from "../views/posts/PostEditModal";
import Login from "../views/login";
import SignUp from "../views/signup";
import Auth from "../utils/Auth";
import PreventLogin from "../utils/PreventAccess";
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
    path: "/login",
    component: <Login />,
  },
  {
    path: "/signup",
    component: <SignUp />,
  },
  {
    path: "/",
    component: <PreventLogin></PreventLogin>,
  },
];

export {ROUTE_INDEX_COMPONENT, ROUTE_MODAL_COMPONENT};
