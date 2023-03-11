
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
function App() {

  return (
    <div className="App min-h-screen h-full w-full">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
