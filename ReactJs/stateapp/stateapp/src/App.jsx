import React, { useState } from 'react'
import Product from './Product'
import ShutUp from './ShutUp'
import Data from './Data'
import Conditional from './Conditional'
function App() {
  var[a,b]=useState(69)
  return (
    <>
    <div className='bg-zinc-700 text-white flex items-center justify-center w-full h-screen flex-col'>
      <h1 className='text-7xl'>{a}</h1>
      <button onClick={()=>{b(a+1)}} className=' py-3 px-6 bg-green-700 rounded-xl text-2xl mt-10'>click me</button>
    </div>
    <Product naam={a} />
    <ShutUp tada="value"/>
    <Data data={{age:18,name:"Prithvi Raj",address:"Bihar"}}/>
    <Conditional/>
    </>
  )
}

export default App