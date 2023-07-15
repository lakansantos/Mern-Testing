import useGetPosts from "../posts/useGetPosts";
import useAddPost from "../posts/useAddPost";
import PagesTable from "../../components/tables/Table";
import PostAddModal from "../posts/PostAddModal";
import useDeletePost from "../posts/useDeletePost";
import PostDeleteModal from "../posts/PostDeleteModal";

import useEditPost from "../posts/useEditPost";
import PostEditModal from "../posts/PostEditModal";
import ActionHeaders from "./HomeActionHeaders";
import TablePagination from "../../components/tables/TablePagination";
import DropDownLimit from "../../components/dropdown/DropDownLimit";
import useLimitPosts from "../posts/useLimitPosts";
import {Col, Row} from "reactstrap";
const Home = () => {
  const {data, isLoading, reload, meta} = useGetPosts();
  const {showAddModal, setShowAddModal, onClose, onAdd} = useAddPost(reload);
  const {limitRows, setLimitRows, search, dropDownOpen, toggle, handleLimit} =
    useLimitPosts(meta);

  const {
    handleDeleteToggle,
    onDelete,
    dataToDelete,
    toggleDelete,
    showDeleteModal,
  } = useDeletePost(reload);

  const {
    handleEditToggle,
    onEdit,
    dataToEdit,
    toggleEdit,
    showEditModal,
    isEditting,
  } = useEditPost(reload);

  return (
    <div className="home-page">
      <header className="d-flex justify-content-between">
        <ActionHeaders setShowAddModal={setShowAddModal} />
      </header>

      <PostAddModal
        onClose={onClose}
        showAddModal={showAddModal}
        onSubmit={onAdd}
      />

      <PostDeleteModal
        onClose={toggleDelete}
        dataToDelete={dataToDelete}
        isOpen={showDeleteModal}
        onSubmit={onDelete}
      />

      <PostEditModal
        onClose={toggleEdit}
        dataToEdit={dataToEdit}
        isOpen={showEditModal}
        onSubmit={onEdit}
        isLoading={isEditting}
      />

      <PagesTable
        data={data}
        handleDeleteToggle={handleDeleteToggle}
        handleEditToggle={handleEditToggle}
        isLoading={isLoading}
      />

      <Row className="align-items-center ">
        <Col className="col-auto">
          <TablePagination meta={meta} data={data} limitRows={limitRows} />
        </Col>
        <Col>
          <DropDownLimit
            isOpen={dropDownOpen}
            limitRows={limitRows}
            toggle={toggle}
            handleLimit={handleLimit}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
