import React from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Home from './components/Home'
import Footer from './components/Footer'
function App() {
  return (
    <div className='app w-full min-h-screen flex flex-col bg-[#ffffff]'>
      <Navbar />
      <SearchBar />
      <Home />
      <Footer />
    </div>
  )
}

export default App