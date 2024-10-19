import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex justify-center items-center h-20 bg-yellow-300'>
        <NavLink
    style={({isActive})=>{
        return {
            color:isActive?"red":"black"
        }
    }} 
    className='text-2xl font-medium mr-5'

    to='/'>Home</NavLink>
    <NavLink
    style={({isActive})=>{
        return {
            color:isActive?"red":"black"
        }
    }} 
    className='text-2xl font-medium mr-5'   
    to='/User'>User</NavLink>
    <NavLink
    style={({isActive})=>{
        return {color:isActive?"red":"black"}
    }} 
    className='text-2xl font-medium mr-5'
    to='/About'>About</NavLink>
    </nav>
  )
}

export default Navbar