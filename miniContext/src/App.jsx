import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React Context Api demonstration</h1>
      <h4>Change state via global variable using useContext</h4>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
