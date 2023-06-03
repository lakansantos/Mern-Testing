import {MODAL_ROUTE_PATH} from "../configs/constants";
import {PostAddModal, PostDeleteModal, Home} from "../views";
import PostEditModal from "../views/posts/PostEditModal";

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
    component: <Home />,
  },
];

export {ROUTE_INDEX_COMPONENT, ROUTE_MODAL_COMPONENT};
