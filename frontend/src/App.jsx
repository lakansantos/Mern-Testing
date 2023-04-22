import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/pages/PagesNavbar'
import Home from './views/posts/Home'

function App() {
  return (
    <>
      <div className="App min-h-screen h-full w-full">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
    </div>
    </>
  )
}

export default App
