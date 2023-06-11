import "./styles/App.css";

import Navbar from "./components/pages/PagesNavbar";
import {ROUTE_INDEX_COMPONENT} from "./routes";
import renderRoutes from "./utils/renderRoutes";

import AuthProvider from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <div className="App min-h-screen h-full w-full">
        <Navbar />
        {renderRoutes(ROUTE_INDEX_COMPONENT)}
      </div>
    </AuthProvider>
  );
}

export default App;
