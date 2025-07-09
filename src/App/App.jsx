/* eslint-disable no-unused-vars */
import './App.css'
import { createBrowserRouter, createHashRouter, Route, RouterProvider, HashRouter } from 'react-router-dom'
import ProtectedRoutes from '@lib/auth/protectedRoutes/ProtectedRoutes'
import UserLogin from '@pages/userlogin/user-login'
import Inventory from '@pages/inventory/inventory'
import Dashboard from '@pages/dashboard/dashboard'
import Customer from '@pages/customer/customer'
import Signup from '@components/signup/signup'
import Login from '@components/login/login'
import Home from '@pages/home/home'

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
