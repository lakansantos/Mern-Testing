import Logout from "../../views/logout/logout";

const PagesNavbar = () => {
  return (
    <nav className="bg-primary">
      <ul>
        <li>
          <a href="/views/home">Home</a>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
};

export default PagesNavbar;
