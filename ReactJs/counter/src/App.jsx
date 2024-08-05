import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-ct'>
      <p>Counter</p>
      <p>Count: {count}</p>
      <button onClick={()=>{
        if(count<10){
          setCount(count+1)
        }
      }}>Increase</button>
      <button onClick={()=>{
        if(count>0){
          setCount(count-1)
        }
      }}>Decrease</button>
      </div>
    </>
  )
}

export default App
