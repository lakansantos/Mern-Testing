
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Requests from './components/Requests'
import React, { useContext, useEffect, useState } from "react";

export const DataContext = React.createContext();
function App() {

  const [data, setData] = useState(null)
  const [err, setErr] = useState('')

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(Requests.trendingData)
        const data = await response.json()
        setData(data)
      }

      catch(error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])





  return (
    <>
      <DataContext.Provider value={data}>
        <div className="App min-h-screen h-full w-full">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </div>
      </DataContext.Provider>
    </>
  )
}

export default App
