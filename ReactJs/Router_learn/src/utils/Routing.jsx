import React from 'react'
import Home from "../componenets/Home";
import User from "../componenets/User";
import About from "../componenets/About";
import { Link,Route,Routes } from 'react-router-dom';
import UserDetails from '../componenets/UserDetails';
function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/User/:name' element={<UserDetails/>}/>
        {/* yaha pe jo :name hai wo dynamic route hai jo ki UserDetails me pass hua hai */}
        <Route path='/About' element={<About/>}/>
      </Routes>
  )
}

export default Routing