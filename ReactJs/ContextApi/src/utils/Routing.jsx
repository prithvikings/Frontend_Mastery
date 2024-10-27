import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import UserDetails from '../components/UserDetails'
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="user" element={<User />} />
        <Route path="user/:name/:id" element={<UserDetails/>}/>
      </Routes>
    </>
  );
}

export default Routing