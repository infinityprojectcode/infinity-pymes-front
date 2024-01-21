/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createHashRouter, Route, RouterProvider, HashRouter } from 'react-router-dom'
import Dashboard from '../Pages/dashboard/dashboard'
import ProtectedRoutes from '../Components/auth/protectedRoutes/ProtectedRoutes'
import Home from '../Pages/home/home'
import Login from '../components/login/login'
import Signup from '../components/signup/signup'
import Inventory from '../Pages/inventory/inventory'
import Customer from '../Pages/customer/customer'
import HomeTemplate from '../Layouts/homeTemplate/home-template'
import UserLogin from '../Pages/userlogin/user-login'

function App() {
  const routes = createHashRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/inventory",
      element: <Inventory />,
    },
    {
      path: "/customer",
      element: <Customer />,
    },
    {
      path: "/user-login",
      element: <UserLogin />,
    },
    {
      path: '/',
      element: <ProtectedRoutes />,
      children: [
        { path: '', element: '' },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
