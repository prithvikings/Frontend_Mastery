import React from 'react'
import Card from './Components/Card'

const App = () => {
  const users = [
    {
      name: "Alice Johnson",
      city: "New York",
      age: 28,
      profession: "Software Engineer"
    },
    {
      name: "Bob Smith",
      city: "San Francisco",
      age: 35,
      profession: "Product Manager"
    },
    {
      name: "Carol Williams",
      city: "Chicago",
      age: 42,
      profession: "Marketing Specialist"
    },
    {
      name: "David Brown",
      city: "Austin",
      age: 31,
      profession: "Data Scientist"
    },
    {
      name: "Eva Martinez",
      city: "Miami",
      age: 39,
      profession: "UX Designer"
    }
  ];
  return (
    <div className='flex justify-center items-center h-screen bg-emerald-500'>
      {users.map((user)=>{
        return <Card user={user}/>
      })}
    </div>
  )
}

export default App