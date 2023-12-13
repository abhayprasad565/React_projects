import { useState } from 'react'
import './App.css'
import UserLogin from './Components/UserLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='font-bold text-lg'> React Login and Signup Page</h1>
      <div className='w-full flex items-center justify-center my-2'>
        <UserLogin></UserLogin>
      </div>
    </>
  )
}

export default App
