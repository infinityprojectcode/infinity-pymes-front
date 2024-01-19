/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createHashRouter, Route, RouterProvider, HashRouter } from 'react-router-dom'
import Dashboard from '../Pages/dashboard/Dashboard'
import ProtectedRoutes from '../Components/auth/protectedRoutes/ProtectedRoutes'
import Home from '../Pages/home/home'
import Login from '../components/login/login'
import Signup from '../components/signup/signup'
import Inventory from '../Pages/inventory/inventory'
import Customer from '../Pages/customer/customer'

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
      path: '/',
      element: <ProtectedRoutes />,
      children: [
        { path: '/dashboard', element: <Dashboard /> },
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
