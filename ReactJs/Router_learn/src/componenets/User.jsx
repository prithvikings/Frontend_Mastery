import React from 'react'
import { Link, useParams } from 'react-router-dom'

function User() {
  return (
    <>
    <div className='bg-zinc-100 w-1/2 m-auto mt-10 px-5 py-5'>
      <h1 className='text-4xl mb-5'>Welcome to my User Page</h1>
      <div className='flex w-1/2 flex-col mt-5'>
        <Link to="/User/John" className='p-3 bg-red-200 text-xl mb-3 hover:bg-red-500 hover:text-white'>John</Link>
        <Link to="/User/Anubhav" className='p-3 bg-red-200 text-xl mb-3 hover:bg-red-500 hover:text-white'>Anubhav</Link>
        <Link to="/User/Rohit" className='p-3 bg-red-200 text-xl mb-3 hover:bg-red-500 hover:text-white'>Rohit</Link>
      </div>
    </div>
  </>
  )
}

export default User