/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "motion/react"
import ButtonCompo from './components/ButtonCompo'
import Card from './components/Card'

function App() {
  return (
    // <div className='min-h-screen flex items-center justify-center bg-zinc-800 w-full mx-auto p-4'
    //   style={{ fontFamily: 'Arial, sans-serif', 
    //     backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px,transparent 0)`,
    //     backgroundSize: '8px 8px',
    //     backgroundRepeat: 'repeat',
    //   }
    // }
    // >
    //   {/* <ButtonCompo/> */}
    // </div>
    <div className='min-h-screen flex items-center justify-center bg-zinc-50 w-full mx-auto p-4'>
      <Card />
    </div>
  )
}

export default App