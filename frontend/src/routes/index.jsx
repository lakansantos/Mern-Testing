import { MODAL_ROUTE_PATH } from "../configs/constants"
import { PostAddModal, PostDeleteModal, Home } from "../views"

const ROUTE_MODAL_COMPONENT = [
    {
        path: MODAL_ROUTE_PATH.create_user,
        component:  <PostAddModal />
    },
    {
        path: MODAL_ROUTE_PATH.delete_user,
        component:  <PostDeleteModal />
    },
]

const ROUTE_INDEX_COMPONENT  = [
    {
        path: '/views/home',
        component: <Home />
    }
]

export {ROUTE_INDEX_COMPONENT, ROUTE_MODAL_COMPONENT}