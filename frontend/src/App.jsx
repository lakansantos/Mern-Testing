import "./styles/App.css";

import Navbar from "./components/pages/PagesNavbar";
import {ROUTE_INDEX_COMPONENT} from "./routes";
import renderRoutes from "./utils/renderRoutes";

import AuthProvider from "./context/AuthContext";
import Toast from "./components/Toast/ToastContainer";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Toast />
        {renderRoutes(ROUTE_INDEX_COMPONENT)}
      </div>
    </AuthProvider>
  );
}

export default App;
