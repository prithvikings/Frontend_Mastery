import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const NotFound = () => {
  const navigate=useNavigate();
  return (
    <div className='bg-zinc-100 h-screen flex flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5'>404 Not Found</h1>
      <Link to="/" className='text-white rounded hover:bg-sky-700 px-4 py-2 bg-sky-600 active:scale-95 transition-all duration-300'>Go Back</Link>
    </div>
  )
}

export default NotFound