import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const UserDetails = () => {
    const {name}=useParams();
    const navigate=useNavigate();
  return (
    <div className='bg-zinc-100 w-1/2 m-auto mt-10 px-5 py-5 '>
        <h1 className='text-4xl mb-5'>Welcome to My About Page</h1>
        <h1 className='text-4xl mb-5'>{name}</h1>
        <button onClick={()=>{
            navigate('/User')
        }} className='text-white rounded hover:bg-sky-700 px-4 py-2 bg-sky-600'>Go Back</button>
    </div>
  )
}

export default UserDetails