import React from 'react'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App