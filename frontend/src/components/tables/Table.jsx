import {Table} from "reactstrap";
import {AiOutlineEdit} from "react-icons/ai";
import {MdDeleteOutline} from "react-icons/md";
import {Link, useLocation} from "react-router-dom";

const PagesTable = ({
  data,
  handleDeleteToggle,
  handleEditToggle,
  isLoading,
}) => {
  const location = useLocation();
  return (
    <Table hover striped>
      <thead>
        <tr className="tr-heading">
          <th>#</th>
          <th>Title</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>
      {isLoading && (
        <tbody>
          <tr>
            <td colSpan={"6"}>Loading...</td>
          </tr>
        </tbody>
      )}
      <tbody>
        {data.length > 0 ? (
          data.map((post, index) => {
            return (
              <tr key={post._id}>
                <td>{index + 1}</td>
                <td>{post.title}</td>
                <td>{post.message}</td>
                <td>
                  <div className="action-icon-container">
                    <Link
                      to={`/edit/post/${post._id}`}
                      state={{background: location}}
                    >
                      <button>
                        <AiOutlineEdit
                          onClick={() => handleEditToggle(post._id)}
                        />
                      </button>
                    </Link>

                    <Link
                      to={`/delete/post/${post._id}`}
                      state={{background: location}}
                    >
                      <button onClick={() => handleDeleteToggle(post._id)}>
                        <MdDeleteOutline />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={"6"} className="text-center">
              <h1>No posts yet</h1>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default PagesTable;
