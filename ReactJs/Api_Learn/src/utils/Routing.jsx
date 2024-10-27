import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../componenets/Home'
import Show from '../componenets/Show'
import About from '../componenets/About'

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/Show"element={<Show />}/>
        <Route path="/About"element={<About />}/>
      </Routes>
    </>
  )
}

export default Routing
