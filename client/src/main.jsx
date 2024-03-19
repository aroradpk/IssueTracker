import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './components/Login.jsx'
import { Signup } from './components/Signup.jsx'
import { Home } from './pages/Home.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import { Provider } from 'react-redux';
import store from './store/store.js'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider  store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
