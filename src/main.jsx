import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Header from './Components/Header.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/board",element:<Header/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
