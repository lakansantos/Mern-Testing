import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/pages/PagesNavbar'
import Home from './views/home/Home'
import { ROUTE_INDEX_COMPONENT } from './routes'
import renderRoutes from './utils/renderRoutes'

function App() {
  return (
    <>
      <div className="App min-h-screen h-full w-full">
        <Navbar />
        {renderRoutes(ROUTE_INDEX_COMPONENT)}
    </div>
    </>
  )
}

export default App
