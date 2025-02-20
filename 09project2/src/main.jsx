import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Customer from './Customer.jsx'
import Landing from './Landing.jsx'

const router= createBrowserRouter([{
  path:"/",
  element:<Layout />,
  children:[
    {
    path:"",
    element:<Landing />
    },{
      path:"customer",
      element:<Customer />
    }
  ]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,                             
)
