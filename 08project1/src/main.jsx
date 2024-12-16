import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PrefetchPageLinks, RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import User from './User.jsx'
import Github from './Github.jsx'

const router= createBrowserRouter([{
  path:"/",
  element: <Layout/>,
  children:[
    {
    path:"home",
    element:<Home/>
  },{
    path:"",
    element:<About/>
  },{
    path:"contact",
    element:<Contact/>
  },{
    path:"user/:userid",
    element:<User/>
  },{
    path: 'Github',
    element: <Github/>
  }]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
