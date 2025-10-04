import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Pakges/Root.jsx'
import MainCardDetails from './Pakges/MainCardDetails.jsx'
import Loadder from './Pakges/Loadder.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    loader:()=>fetch('https://openapi.programming-hero.com/api/plants'),
    Component:Root,
    
  },




  {
    path:'/details/:id',
    loader:({params})=>fetch(`https://openapi.programming-hero.com/api/plant/${params.id}`),
    Component:MainCardDetails
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
