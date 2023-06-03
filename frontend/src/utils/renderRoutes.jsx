import {Routes, Route, useLocation} from "react-router-dom";
import {ROUTE_MODAL_COMPONENT} from "../routes";
import {PostAddModal, PostDeleteModal} from "../views";
import PostEditModal from "../views/posts/PostEditModal";
const renderRoutes = (route) => {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <div>
      <Routes location={background || location}>
        {route.map((item, index) => {
          return (
            <Route key={index} path={item.path} element={item.component}>
              <Route path="create/post" element={<PostAddModal />} />
              <Route path="delete/post/:id" element={<PostDeleteModal />} />
              <Route path="edit/post/:id" element={<PostEditModal />} />
            </Route>
          );
        })}
      </Routes>
      {background && (
        <Routes>
          {ROUTE_MODAL_COMPONENT.map((item, id) => {
            return <Route key={id} path={item.path} element={item.component} />;
          })}
        </Routes>
      )}
    </div>
  );
};

export default renderRoutes;
