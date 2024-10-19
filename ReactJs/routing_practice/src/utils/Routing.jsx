import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/Home'
import User from '../components/User'
import About from '../components/About'
import NotFound from '../components/NotFound'
import UserDetails from '../components/UserDetails'
const Routing = () => {
  return (
    <>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/User/:name' element={<UserDetails/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Routes>
    </>
  )
}

export default Routing