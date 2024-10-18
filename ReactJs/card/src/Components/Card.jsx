import React from 'react'

const Card = ({user}) => {
  return (
    <div className='mr-7 bg-white text-black inline-block p-6 text-center rounded shadow'>
        <h1 className='text-2xl font-semibold mb-4'>{user.name}</h1>
        <h4 className='text-blue-400'>{user.profession}</h4>
        <h2>{user.city}, {user.age}</h2>
        <button className='bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Contact</button>
    </div>
  )
}

export default Card