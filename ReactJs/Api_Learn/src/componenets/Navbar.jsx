import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="w-full pt-8">
        <nav className="flex justify-center gap-10 text-2xl">
          <Link to="/">Home</Link>
          <Link to="/Show">Show</Link>
          <Link to="/About">About</Link>
        </nav>
        <hr className='bg-black w-[100%] h-2 mt-10 mb-6' />
      </div>
    </>
  )
}

export default Navbar