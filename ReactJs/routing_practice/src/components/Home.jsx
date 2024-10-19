import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center items-start h-screen'>
      <div className='mt-10 bg-gray-300 w-1/2 h-80 px-10 py-5'>
        <h1 className='text-4xl font-semibold '>Welcome to the Home Page</h1>
        <p className='text-lg mt-5 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quam non nostrum fuga reiciendis. Eveniet quam quia alias necessitatibus ipsa suscipit rerum, obcaecati numquam et nihil dolorum? Odit voluptate assumenda mollitia velit minima amet eum quis minus sed quo. Deserunt maxime harum quae accusamus delectus veritatis amet quod reiciendis numquam.</p>
        <button className="bg-blue-500 text-white px-5 py-2 rounded-md mt-5 mb-3 hover:bg-blue-700 active:scale-95 transition-all duration-300 font-medium">Explore</button>
      </div>
    </div>
  )
}

export default Home