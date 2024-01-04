/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from '../Pages/dashboard/Dashboard'
import ProtectedRoutes from '../Components/auth/protectedRoutes/ProtectedRoutes'
import Login from '../Layouts/Login/Login'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
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
