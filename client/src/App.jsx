import React from 'react'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'

const App = () => {
  return (
    <>
    <Header/>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App