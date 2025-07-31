/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "motion/react"

function App() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-zinc-800 w-full mx-auto p-4'>
      <motion.div
            animate={{ rotate: 360 }}
            transition={
               {duration: 1 ,
               repeat: Infinity, repeatType: "loop" ,
               ease: "linear"}
            }
      className='bg-red-400 w-64 h-64 border-4 border-gray-200'></motion.div>
    </div>
  )
}

export default App