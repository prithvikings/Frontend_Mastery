import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <div className='app w-full min-h-screen flex flex-col bg-[#ffffff] font-gilroy'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App